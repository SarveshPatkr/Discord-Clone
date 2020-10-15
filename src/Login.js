import { Button } from '@material-ui/core';

import React from 'react';
import './Login.css';
import { auth , provider } from'./firebase.js';


function Login() {
    const signIn = () =>{ 
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }
    return (
        <div className='login' >
            <div className="login__text"> 
                <img src="./discord_logo.png" alt=""/>
                <h2>Discord <span className="author">by Sarvesh Patkar</span> </h2>
            </div>
            <Button onClick={signIn}>log in</Button>
            
        </div>
    )
}

export default Login
