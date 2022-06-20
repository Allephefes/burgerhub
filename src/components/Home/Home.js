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
    let [userAuth, setUserAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('logged_in')) {
            setLoggedIn(true);
        }
        if (localStorage.getItem('auth')) {
            setUserAuth(true);
        }
    }, []);

    const signUpHandler = () => {
        setSignUp(!signUp);
    }

    const signInHandler = () => {
        setSignIn(!signIn);
    }

    const loggedInHandler = (auth) => {
        setLoggedIn(true);
        setSignIn(false);
        setSignUp(false);
        localStorage.setItem('logged_in', true);
        if (auth === 'admin') {
            setUserAuth(true);
            localStorage.setItem('auth', true);
        }
    }

    const loggedOutHandler = () => {
        localStorage.removeItem('logged_in');
        localStorage.removeItem('auth');
        setLoggedIn(false);
        setUserAuth(false);
    }

    return (
        <React.Fragment>
            <Header>
                <div>
                    {!signUp && !signIn && !loggedIn ? <Button className='white ml-1' onClick={signUpHandler}>Sign Up</Button> : ''}
                    {!signIn && !signUp && !loggedIn ? <Button className='white ml-1' onClick={signInHandler}>Log In</Button> : ''}
                </div>
                <div>
                    {userAuth ? <Link to='/admin' style={{ color: 'inherit', textDecoration: 'inherit' }}><Button className='white ml-1'>Admin</Button></Link> : ''}
                    {loggedIn ? <Button className='white ml-1' onClick={loggedOutHandler}>Log Out</Button> : ''}
                </div>
            </Header>
            {signUp ? <AddUser back={signUpHandler}></AddUser> : ''}
            {signIn ? <ConnectUser back={signInHandler} success={loggedInHandler}></ConnectUser> : ''}
            {loggedIn ? <Button className='white ml-1'><Link to='/kitchen' style={{ color: 'inherit', textDecoration: 'inherit' }}>Shop</Link></Button> : ''}
        </React.Fragment>
    );
}

export default Home;
