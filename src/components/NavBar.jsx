import React from 'react'
import icon from '../assets/icon.png'
import "../stylesheet/NavBar.css";

export default function NavBar() {
  return (
    <>
        <div className="navbar">
            <h1 className='iconText'>
                <img src={icon} className="iconImg" alt="logo"></img>
                Easy Property
            </h1>

            <div className='navLinks'>
                <a href='/'>Home</a>
                <a href='/'>About Us</a>
                <a href='/'>Contact</a>
                <a href='/'>Sign In</a>
            </div>
            
        </div>

        
      
    </>
  )
}
