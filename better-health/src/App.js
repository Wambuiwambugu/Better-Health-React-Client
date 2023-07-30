import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  const [userData, setUserData] = useState([]);
  const [currentUser, setCurrentUser] = useState(null)

  const baseUrl = "https://my-json-server.typicode.com/Wambuiwambugu/Group-8-REST-API/users";

  useEffect(() => {
    fetch(baseUrl)
    .then(res => res.json())
    .then(data => console.log(data))
  },[])

  //handle login function that takes email and pasword as params
  //find user in userdata whose email and password match params
  // if user is found, set user to localstorage,
  // set current user to user
  // pass handle login function as prop to login component
  function handleLogin(email,password){
    const user = userData.find(((user) => user.email === email));
   
      console.log(user)
    
    // setCurrentUser(loggedInUser)
    // console.log(currentUser)
    
  }

  // handle signup function that takes user input from signup form in a valid json oject
  // should take one param formdata
  // post to users using post request to create new user
  // set user to local storage
  // set current user to user
  // pass handle signup as prop
  function handleSignup(formName,formEmail,formPassword){
    let user = {
      name: formName,
      email_address: formEmail,
      password: formPassword
    }
    fetch(`${baseUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }



  return (
    <div>
      <Login loginUser={handleLogin} />
      <Signup signUpUser={handleSignup}/>
    </div>
  );
}

export default App;
