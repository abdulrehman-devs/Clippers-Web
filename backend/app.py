from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Initialize Flask app
app = Flask(__name__)
# Allow requests only from your Netlify frontend
CORS(app, origins=["https://clippers.netlify.app"])  # ← Replace with your actual Netlify site URL

# Get API key from environment
API_KEY = os.getenv("API_KEY")

# System prompt for the chatbot
SYSTEM_PROMPT = """
You are a friendly virtual assistant for a barbershop.

Help customers with information about services, prices, timings, and location.

Location: Askari 11 Sector A Main Building Bedian Road Lahore.

Timings:
- Monday to Saturday: 9 AM to 1 AM
- Sunday: 9 AM to 3 AM

Keep your replies short, polite, and helpful.

Do NOT ask for personal details or book appointments. Just answer questions clearly.
"""

# Function to call LLaMA model via Groq API
def ask_llama(user_input):
    url = "https://api.groq.com/openai/v1/chat/completions"
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {API_KEY}"
    }

    payload = {
        "model": "meta-llama/llama-4-scout-17b-16e-instruct",
        "messages": [
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": user_input}
        ]
    }

    response = requests.post(url, headers=headers, json=payload)
    response.raise_for_status()

    full_reply = response.json()["choices"][0]["message"]["content"].strip()

    # Limit to 15 lines, prefer bullet points
    lines = full_reply.splitlines()
    bullets = [line for line in lines if line.strip().startswith(("-", "*"))]
    return "\n".join(bullets[:15]) if bullets else "\n".join(lines[:15])

# POST route for chatbot
@app.route("/chatbot", methods=["POST"])
def chat():
    data = request.get_json()
    user_message = data.get("message", "")
    print("Received:", user_message)

    if not user_message:
        return jsonify({"error": "No message provided"}), 400

    try:
        reply = ask_llama(user_message)
        print("Reply:", reply)
        return jsonify({"response": reply})
    except Exception as e:
        print("Exception:", e)
        return jsonify({"error": "Something went wrong, please try again later."}), 500

# Run the app (not used in production)
if __name__ == "__main__":
    app.run(debug=True)
