import React from 'react'
import { useState, useEffect } from 'react';

function Login({loginUser}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  
  function handleSubmit(e){
    e.preventDefault();
    
    // add call back function handleLogin that takes email and password as params
    loginUser(email,password)

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
              onChange={({ target }) => setEmail(target.value)}
            />
            <br></br>
            <label htmlFor="password">password: </label>
            <input
              type="password"
              value={password}
              placeholder="enter a password"
              onChange={({ target }) => setPassword(target.value)}
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