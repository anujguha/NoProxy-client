import '../App.css';
import './style.css';
import React from 'react';
import {Link } from 'react-router-dom';


function Navbar() {
    return (
        <div className="Navbar">
            <div className='header'><h1>Welcome to NoProxy !</h1></div>
          <ul className='list'>
            <li className='box2'>
              <img className='icon-home' src='./assets/faculty.png' alt='Faculty.img'></img>
              <Link to="/faculty" className='link'>Faculty</Link>
            </li>
            <li className='box2'>
              <img className='icon-home' src='./assets/student.png' alt='Faculty.img'></img>
              <Link to="/student" className='link'>Student</Link>
            </li>
          </ul>

        </div>
    );
}

export default Navbar;