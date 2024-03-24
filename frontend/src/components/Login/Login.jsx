import './Login.css'
import React, {useState} from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
function Login () {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const credentials = {
        username: user,
        password: pass,
    };
    const huc = (event) => {
        setUser(event.target.value);
        credentials.username = user;
    };
    const hpc = (event) => {
        setPass(event.target.value);
        credentials.password = pass;
    };
    const process = () => {
        fetch('/api/login', {
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
                <p1>Glad to have you back!</p1>
                <input type={'text'} value={user} onChange={huc} placeholder="Username" />
                <input type={'password'} value={pass} onChange={hpc} placeholder="Password" />
                <button onClick={process}>Proceed</button>
                <p>Don't have an account?<a href={'/Signup'}> Signup!</a></p>
            </div>
            </div>
            <Footer/>
        </>
    );
} export default Login