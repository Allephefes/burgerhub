import React, { useState } from 'react';

import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import './AddUser.css';

const AddUser = props => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeat, setRepeat] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();

        if (username.trim().length === 0 || password.trim().length === 0) {
            return;
        }
        if (password !== repeat) {
            return;
        }
        if (/[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password)) {
            return;
        }

        setUsername('');
        setPassword('');
        setRepeat('');
    }

    const usernameHandler = (event) => {
        if (!/[' ']/.test(event.target.value)) {
            setUsername(event.target.value);
        }
    }

    const passwordHandler = (event) => {
        if (!/[' ']/.test(event.target.value)) {
            setPassword(event.target.value);
        }
    }

    const repeatHandler = (event) => {
        if (!/[' ']/.test(event.target.value)) {
            setRepeat(event.target.value);
        }
    }

    return (
        <Card className='input'>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username' className='white'>Username</label>
                <input id='username' type='text' value={username} onChange={usernameHandler}></input>
                <label htmlFor='password' className='white'>Password</label>
                <input id='password' type='text' value={password} onChange={passwordHandler}></input>
                <label htmlFor='repeat' className='white'>Repeat Password</label>
                <input id='repeat' type='text' value={repeat} onChange={repeatHandler}></input>
                <Button type='submit'>Sign up</Button>
            </form>
        </Card>
    );
}

export default AddUser;