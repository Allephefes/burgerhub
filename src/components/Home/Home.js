import React, { useState, useEffect } from 'react';
import 'bootstrap';

import Button from '../UI/Button/Button';
import AddUser from '../Users/AddUser';
import ConnectUser from '../Users/ConnectUser';
import './Home.css';

function Home() {
    let [signUp, setSignUp] = useState(false);
    let [signIn, setSignIn] = useState(false);
    let [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('logged_in')) {
            setLoggedIn(true);
        }
    }, []);

    const signUpHandler = () => {
        setSignUp(!signUp);
    }

    const signInHandler = () => {
        setSignIn(!signIn);
    }

    const loggedInHandler = () => {
        localStorage.setItem('logged_in', !loggedIn);
        setLoggedIn(!loggedIn);
        setSignIn(false);
        setSignUp(false);
    }

    return (
        <React.Fragment>
            <div className='expenses'>
                <div className="hub">
                    <span>Burger</span>
                    <span>hub</span>
                </div>
                {!signUp && !signIn && !loggedIn ? <Button className='white ml-1' onClick={signUpHandler}>Sign Up</Button> : ''}
                {!signIn && !signUp && !loggedIn ? <Button className='white ml-1' onClick={signInHandler}>Log In</Button> : ''}
                {loggedIn ? <Button className='white ml-1' onClick={loggedInHandler}>Log Out</Button> : ''}
            </div>
            {signUp ? <AddUser back={signUpHandler}></AddUser> : ''}
            {signIn ? <ConnectUser back={signInHandler} success={loggedInHandler}></ConnectUser> : ''}
        </React.Fragment>
    );
}

export default Home;
