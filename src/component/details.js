import React, { useEffect, useState } from 'react';
import './style.css';


function Details() {
    const [backendData, setBackendData] = useState([{}])

    useEffect(() => {
        fetch("/faculty").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data);
            }
        )
    }, [])



    return (
        <div className="Navbar">
            <div className='header'><h1>Welcome to NoProxy !</h1></div>
            <table class="styled-table">
                <thead>
                    <tr>
                        <th>Enrollment</th>
                        <th>Class</th>
                    </tr>
                </thead>
                
                <tbody>
                    {(typeof backendData === 'undefined') ? (<h1> Loading...!</h1>) : (
                        backendData.map((user, i) => (

                            <tr key={i}>
                                <td>{user.enrollment}</td>
                                <td>{user.class}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Details
