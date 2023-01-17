import React from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';
import Navigation from './components/navigation/navigation';

function App() {
    function login() {
        fetch('http://localhost:3003/login', {
            method: 'post',
            body: JSON.stringify({email: 'bbb@aaa.com', password: '1234567890'}),
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => {
                localStorage.setItem('token', data.token);
                console.log(data);
            })
    }

    return (
        <div className="app">
            <h2>GRUNIACT</h2>
            <Navigation/>
            <Outlet/>


            <button onClick={login}>LOGIN</button>
        </div>
    );
}

export default App;
