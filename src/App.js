import './App.css';
import React from 'react';
import Faculty from './component/faculty';
import Student from './component/student';
import Navbar from './component/navbar';
import Details from './component/details';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      
      <Router>
        <div className='Container'>
          <Routes>
            <Route exact path='/' element={<Navbar />}></Route>
            <Route exact path='/faculty' element={<Faculty />}></Route>
            <Route exact path='/student' element={<Student />}></Route>
            <Route exact path='/details' element={<Details />}></Route>
            
          </Routes>
          
        </div>
      </Router>
    </div>
  );
}

export default App;

