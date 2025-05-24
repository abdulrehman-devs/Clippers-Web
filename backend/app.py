from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
CORS(app)

# Get the API key from environment variables
API_KEY = os.getenv("API_KEY")

# System prompt for the barber shop chatbot
SYSTEM_PROMPT = """
You are a friendly virtual assistant for a barbershop.

Help customers with information about services, prices, timings, and location.

Location: Askari 11 Sector A Main Building Lahore.
2nd Branch is in Main Boulevard Gulberg III.

Give answers in bullets.

Timings:
- Monday to Saturday: 9 AM to 1 AM
- Sunday: 9 AM to 3 AM

Keep your replies short, polite, and helpful.

Do NOT ask for personal details or book appointments. Just answer questions clearly.

Do Not give answer to questions in which the word 'Barber is not included'.

On Sunday the shop will remain closed.


Cutting rates are:
Signature Artist 1000
Senior artist: 700
Junior Artist: 450

Beard rates are:
Signature Artist 800
Senior artist: 500
Junior Artist: 350

Facial prices are between 2000 - 6000
"""

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

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    user_message = data.get("message", "")
    if not user_message:
        return jsonify({"error": "No message provided"}), 400

    try:
        reply = ask_llama(user_message)
        return jsonify({"response": reply})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
