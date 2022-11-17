import React  from "react";
import io from 'socket.io-client';
import './style.css';
import { Link } from "react-router-dom";



const socket = io.connect('http://localhost:5001');


function Student() {
    let classvalue  = "";
    let uservalue = "";
    
    function fetchpost(){
    fetch('/student',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Sender : 'True',
        })
       })
    }
    

    
    const getInputValue = (event)=>{
        uservalue = event.target.value;
        console.log(uservalue)
    }
    const getclassValue = (event)=>{
        classvalue = event.target.value;
        console.log(classvalue)
    }
    function senddata(){
        fetchpost();
        const msg ={
            Enrollment: uservalue,
            Class: classvalue,
        };
        socket.emit('enrollment', msg);
        alert("Sent !");
        socket.on('SENT',msg =>{
            alert(msg);
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
            <img className='image-box' src='./assets/attendance.png.jpg' alt=''></img>
                <div >
                    <input type="text" placeholder="Enrollment No." className="input-box" id="input" onChange={getInputValue} >
                    </input>
                </div>
                <div >
                    <input type="text" placeholder="Class" className="input-box" id="class" onChange={getclassValue} >
                    </input>
                </div>
                <div >
                    <button type="submit" value="submit" onClick={ senddata}  className="input-box" id="subbutton">
                        <h2>Submit</h2>
                    </button>
                </div>
            </div>
        </div>
    );
    }
export default Student;