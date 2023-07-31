import React from 'react'
import { useState, useEffect } from 'react';

function Login({loginStatus,loggedinUser}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUrl = "http://localhost:9292/login";
  
  
  function handleSubmit(e){
    e.preventDefault();
    const user = {
      email_address: email,
      password: password
    }
    fetch(`${loginUrl}`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then(data => console.log(data))
    loginStatus(true)
    

  }


    return (
        <form onSubmit={handleSubmit}>
          <div>
            <h1>Login</h1>
            <label htmlFor="email">Email:: </label>
            <input
              type="text"
              value={email}
              placeholder="enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br></br>
            <label htmlFor="password">password: </label>
            <input
              type="password"
              value={password}
              placeholder="enter a password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br></br>
            <button type="submit">Login</button>
          </div>
          <div>
            <p>Dont have an account? Sign up here!</p>
          </div>
        </form>
      );
}

export default Login