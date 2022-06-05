import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap';

import Button from '../UI/Button/Button';
import AddUser from '../Users/AddUser';
import ConnectUser from '../Users/ConnectUser';
import Header from '../Header/Header';

function Home(props) {
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
        localStorage.setItem('logged_in', true);
        setLoggedIn(true);
        setSignIn(false);
        setSignUp(false);
    }

    const loggedOutHandler = () => {
        localStorage.removeItem('logged_in');
        setLoggedIn(false);
    }

    return (
        <React.Fragment>
            <Header>
                <div>
                    {!signUp && !signIn && !loggedIn ? <Button className='white ml-1' onClick={signUpHandler}>Sign Up</Button> : ''}
                    {!signIn && !signUp && !loggedIn ? <Button className='white ml-1' onClick={signInHandler}>Log In</Button> : ''}
                </div>
                {loggedIn ? <Button className='white ml-1' onClick={loggedOutHandler}>Log Out</Button> : ''}
            </Header>
            {signUp ? <AddUser back={signUpHandler}></AddUser> : ''}
            {signIn ? <ConnectUser back={signInHandler} success={loggedInHandler}></ConnectUser> : ''}
            {loggedIn ? <Button className='white ml-1'><Link to='/kitchen' style={{ color: 'inherit', textDecoration: 'inherit'}}>Shop</Link></Button> : ''}
        </React.Fragment>
    );
}

export default Home;
