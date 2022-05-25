import React, { useState } from 'react';

import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import './AddUser.css';

const AddUser = props => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();

        if (username.trim().length === 0 || password.trim().length === 0) {
            return;
        }
        //get password from database & compare
        // if () {
        //     return;
        // }

        setUsername('');
        setPassword('');
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

    return (
        <Card className='input'>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username' className='white'>Username</label>
                <input id='username' type='text' value={username} onChange={usernameHandler}></input>
                <label htmlFor='password' className='white'>Password</label>
                <input id='password' type='text' value={password} onChange={passwordHandler}></input>
                <Button type='submit' className='ml-1'>Sign in</Button>
                <Button onClick={props.back} className='ml-1'>Back</Button>
            </form>
        </Card>
    );
}

export default AddUser;