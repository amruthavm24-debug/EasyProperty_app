import React from 'react'
import icon from '../assets/icon.png'
import "../stylesheet/NavBar.css";
import { Link } from "react-router-dom";
import About from "../Pages/AboutUs.jsx";

export default function NavBar() {
  return (
    <>
        <div className="navbar">
            <h1 className='iconText'>
                <img src={icon} className="iconImg" alt="logo"></img>
                Easy Property
            </h1>

            <div className='navLinks'>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>   
                <Link to="/contact">Contact</Link>
                <Link to="/login">Sign In</Link>
            </div>
            
        </div>

        
      
    </>
  )
}
