import React from 'react'
import './Newsletter.css'
import { isDisabled } from '@testing-library/user-event/dist/utils';

export const Newsletter = () => {
    return (
        <div className='newsletter'>
            <div className="newsletter-text">
                <p>Be the first to know about exclusive offers, top tips and much more</p>
                <h4>Join our newsletter to win £200!</h4>
                <p>All new signups will be entered into our quarterly draw to win a £200 Rush gift voucher</p>
            </div>
            <div className="text-boxes">
                <div className="fname"><h4>Full Name</h4>
                    <input className='name' type='text' required></input>
                </div>

                <div className="e">
                    <h4>Email Address</h4>
                    <input className='email' type='email' required></input>
                </div>

                <input className='submit' type='button' value='Submit' onClick={submit}></input>

            </div>
        </div>
    )

    function submit() {
        var submitbtn = document.querySelector(".submit");
        var name = document.querySelector(".name").value;
        var email = document.querySelector(".email").value;
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (name !== "" && email !== "") {

            if (emailRegex.test(email)) {

                alert("Thank You for signing up.")

                document.querySelector(".name").value = "";
                document.querySelector(".email").value = "";
                submitbtn.disabled = true;
                submitbtn.style.backgroundColor = "transparent";
            }

            else {
                alert("Email is not valid")
            }
        }

        else {
            alert("Fill out both the fields")
        }
    };
}

export default Newsletter