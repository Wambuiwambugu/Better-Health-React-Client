import React from 'react';
import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  const [userData, setUserData] = useState([]);
  const [currentUser, setCurrentUser] = useState(null)
  const [isLoggedin, setIsLoggedin] = useState(false)

  

  //handle login function that takes email and pasword as params
  //find user in userdata whose email and password match params
  // if user is found, set user to localstorage,
  // set current user to user
  // pass handle login function as prop to login component
  



  return (
    <div>
      <Login loginStatus={setIsLoggedin} loggedinUser={setCurrentUser} />
      <Signup  loginStatus={setIsLoggedin} loggedinUser={setCurrentUser}/>
    </div>
  );
}

export default App;
