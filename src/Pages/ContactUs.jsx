import React from 'react'
import "../stylesheet/ContactUs.css";

export default function ContactUs() {
  return (
    <div className="contact-page">
        <h1 className='contact-title'>Contact Us</h1>
        <div className="contact-container">
            <div className="contact-info">
                <h3>📞 Call Us</h3>
                <p>+91 00215 32410</p>

                <h3>📍 Location</h3>
                <p>Kerala, India</p>

                <h3>⏰ Business Hours</h3>
                <p>Mon - Sat: 10am - 8pm</p>
            </div>

            <div className="contact-form">
                <h2>Contact Us</h2>

                <input type="text" placeholder="Enter your name" />
                <input type="email" placeholder="Enter your email" />
                <textarea placeholder="Your message"></textarea>

                <button>Submit</button>
            </div>
        </div>
    </div>
  )
}
