import React from 'react'
import "../stylesheet/AboutUs.css";
import image6 from '../assets/Images6.png'

export default function AboutUs() {
  return (
    <div className='about-page'>
      <h1 className='about-title'>About Us</h1>
      <p className='about-sub'>A simple solution for browsing, renting, and managing properties efficiently.</p>
      
      <div className="about-section">
        <img src={image6} alt="building" />
        <div className="about-text">
          <h2>Our Mission And Values</h2>
          <p>
            We aim to simplify property searching and provide users with an easy
            and efficient way to manage their properties.
          </p>
        </div>
      </div>

    </div>
  )
}
