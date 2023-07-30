import React from 'react'

function Navbar() {
    let user = "a"
    if(user){
        return (
            <div>
                <ul>
                    <li>logo</li>
                    <li>logout</li>
                </ul>
            </div>
          )
    }
    return (
        <div>
            <ul>
                <li>home icon</li>
                <li>notification icon</li>
                <li>user icon</li>
                <li>user name</li>
            </ul>
        </div>
    )
    }
    
    

export default Navbar