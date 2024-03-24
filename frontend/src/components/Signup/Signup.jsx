import './Signup.css'
import Header from "../Header/header";
import Footer from "../Footer/footer";
import React, { useState } from 'react';

function Signup() {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const credentials = {
        username: user,
        password: pass,
        email: email,
    };
    const huc = (event) => {
        setUser(event.target.value);
        credentials.username = user;
    };
    const hec = (event) => {
        setEmail(event.target.value);
        credentials.username = email;
    };
    const hpc = (event) => {
        setPass(event.target.value);
        credentials.username = pass;
    };
    const process = () => {
        fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <>
            <Header/>
            <div className={'loggerin'}>
            <div className={'signlogbox'}>
                <p>We are glad to have you!</p>
                <input type={'text'} value={user} onChange={huc} placeholder="Username" />
                <input type={'text'} value={email} onChange={hec} placeholder="Email" />
                <input type={'password'} value={pass} onChange={hpc} placeholder="Password" />
                <button onClick={process}>Proceed</button>
            </div>
            </div>
            <Footer/>
        </>
    );
}

export default Signup;
