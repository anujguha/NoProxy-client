import React, { useState } from 'react'
import './style.css';
import {Link } from 'react-router-dom';





function Faculty() {
  const [serverStatus , setServerStatus ] = useState(false);
  
  
  function handleclick(){
    fetch('/faculty/create',{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        Receiving : 'True',
        
    })
   }).then((res) => res.json())
   .then((data) => {
    if(serverStatus === false){
      alert(data.message);
      setServerStatus(true);
    }
    else{
      alert("Server already created");
    }
      
   })
   .catch((err) => {
      alert("ERROR! ");
   });
  }
  function handleclick2(){
    fetch('/faculty/end',{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        StopReceiving : 'True',
        
    })
   }).then((res) => res.json())
   .then((data) => {
    if(serverStatus === false){
      alert("No server created")
    }else{
      alert(data.message);
      setServerStatus(false)
    }
      
   })
   .catch((err) => {
      alert("ERROR! ");
   });
  
  }
 


  return (
    <div className='Navbar'>
            
            


            <div className="navbar">
                <ul className="nav-list">
                    <li><Link className="element" to='/'><b>Home</b></Link></li>
                    <li><Link className="element" to='/faculty'><b>Faculty</b></Link></li>
                    <li><Link className="element" to='/student'><b>Student</b></Link></li>
                </ul>
            </div>
            <div className="box4"><h1 className="getdetail">NoProxy</h1> </div>
            <div className="box3" id="form">
            <img className='image-box' src='./assets/facultypage.png' alt=''></img>
            <div ><button  className="input-box" onClick={handleclick}><h2>Create server</h2></button>
                </div>
                <div ><button  className="input-box" onClick={handleclick2}><h2>End server</h2></button>
                </div>
                <button className="input-box">
               <Link to="/details" className='linktag' ><h2>Get Details</h2></Link>
            </button>
            </div>


























        </div>
  );
}

export default Faculty