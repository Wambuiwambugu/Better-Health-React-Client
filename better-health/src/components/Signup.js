import React from 'react'
import { useState } from 'react';


function Signup({loginStatus,loggedinUser}) {
  const signupUrl = "http://localhost:9292/signup";
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        const newUser = {
          name: name,
          email_address: email,
          password: password
        }
        fetch(`${signupUrl}`,{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
        .then(res => res.json)
        .then(data => (data))
        
        
    }



    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h1>Sign up</h1>
                <br></br>
                <label htmlFor="name">Your Name: </label>
                <input
                  type="text"
                  value={name}
                  placeholder="enter full namel"
                  onChange={({ target }) => setName(target.value)}
                />
                <br></br>
                <label htmlFor="email">Email: </label>
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
                <button type="submit">Signup</button>
            </div>
            <div>
                <p>Already have an account? Login here</p>
            </div>
        </form>
      );
}

export default Signup