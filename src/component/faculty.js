import React from 'react'
import './style.css';
import {Link } from 'react-router-dom';



function Faculty() {
  
  
  
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
   }).then(
    response => alert(response.json().message)
  )
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
   }).then(
    response => alert(response.json().message)
  )
  }
 


  return (
    <div className='Navbar'>
            <h1>NoProxy!</h1>
            <div className="box4">
            <Link to="/details" className="getdetail">Get Details</Link>
            </div>
            <div className="box3">
                <h4>Tap to create or end session.</h4>
                <div ><button  className="box" onClick={handleclick}><h2>Create server</h2></button>
                </div>
                <div ><button  className="box" onClick={handleclick2}><h2>End server</h2></button>
                </div>
                
            </div>
        </div>
  );
}

export default Faculty