import React, { useState } from 'react'
import "../stylesheet/Login.css";

export default function Login() {
    const[email, setEmail] = useState();
    const[password, setPassword] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!email || !password){
            alert("Please fill all details");
            return;
        }

        if(email === "admin@gmail.com" && password ==="1234"){
            alert("Login Sucessfull ✅");
        }else{
            alert("Invalid Credentials ❌");
        }
    }

  return (
    <div className='login-page'>
      <h1 className='login-title'>Login To EasyProperty </h1>
      <div className='login-form'>
        <form onSubmit={handleSubmit}>
            <input type='email' 
                placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
            <input type='password' 
            placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
            <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}
