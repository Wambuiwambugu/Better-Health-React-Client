import React from 'react'
import { useState } from 'react';

function Signup({signUpUser}) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        signUpUser(name,email,password)
    }



    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h1>Sign up</h1>
                <br></br>
                <label htmlFor="name">Your Name: </label>
                <input
                  type="text"
                  value={email}
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
                <button type="submit">Login</button>
            </div>
            <div>
                <p>Already have an accoun? Login here</p>
            </div>
        </form>
      );
}

export default Signup