import React from 'react'
import Header from '../components/Header'
import Newbot from '../components/newbot'
import '../components/Contact.css'

export const Contact = () => {
    return (

        <div className='contact'>

            <Header imgtext={"Let's Connect"} />

            <hr />

            <h1>Location</h1>

            <div className="map-container">
                <iframe className='map2'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.931498345297!2d-0.12423251996120144!3d51.532816246575194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3f0fbcd2cd%3A0x9ac9a670cb7caf8f!2sBarber%20Shop!5e0!3m2!1sen!2s!4v1710319424400!5m2!1sen!2s"
                    referrerpolicy="no-referrer-when-downgrade"
                    style={{ width: '700px', height: '500px' }}
                ></iframe>
                <hr/>
            </div>


            <div className="form">
                <div className="text">
                    <h2>Contact Our Team</h2>
                    <span>Please fill out the complete form.</span>
                    <br />
                    <p>Need to get in touch with us? We'd love to hear from you! We at Barber's Den came out as the standard bearer of excellence in the barber industry with unprecedented service and top-notch barbers. The Clippers experience begins when you walk through our door. Let us know how we can help you. </p>
                </div>

                <div className="form-inputs">
                    <p>Full Name</p> <input id='name' type='text' placeholder='Your Name' required />
                    <p>E-mail</p> <input id='email' type='email' required />
                    <p>Subject</p> <input id='subject' type='text' placeholder='Write the subject of your query' />
                    <p>Your Message</p> <input id='msg' type='text' required />
                    <button id='button' onClick={submit}>Submit</button>
                </div>
            </div>

            <Newbot />
        </div>
    )

    function submit () {
        let name = document.querySelector('#name').value;
        let email = document.querySelector('#email').value;
        let subject = document.querySelector('#subject').value;
        let msg = document.querySelector("#msg").value;
        let btn = document.querySelector('#button');
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



        if (name !== "" && email !== "" && subject !== "" && msg !== "" ) {
            if (emailRegex.test(email)) {
                alert("Thankyou for your response. We'll get back to you shortly!");
                document.querySelector("#name").value = "";
                document.querySelector("#email").value = "";
                document.querySelector("#subject").value = "";
                document.querySelector("#msg").value = "";
                btn.disabled = true;
                btn.style.backgroundColor = "transparent"
            }

            else {
                alert("Invalid Email");
            }
        }

        else {
            alert("Fill out all the fieds.");
        }
    }
}

export default Contact