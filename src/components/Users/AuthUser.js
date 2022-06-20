import React, { useState } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';

import Users from '../../http/users';

const AuthUser = (props) => {
    const [username, setUsername] = useState('');
    const [auth, setAuth] = useState('');

    const options = [
        { value: 'consumer', label: 'consumer' },
        { value: 'admin', label: 'admin' }
    ];

    const style = {
        option: (provided, state) => ({
            ...provided,
            borderBottom: '1px dotted pink',
            color: state.isSelected ? 'black' : 'blue',
            padding: 20
        })
    }

    const selectHandler = (event) => {
        setAuth(event.value);
    }

    const authHandler = async (event) => {
        if (username.trim().length === 0) {
            return;
        }

        await Users.getUsers().then(users => {
            for (let i = 0; i < users.length; i++) {
                let user = users[i];
                if (user.username === username) {
                    Users.setUser(user.id, user.username, user.password, auth);
                    return;
                }
            }
        });

        setUsername('');
    }

    const usernameHandler = (event) => {
        if (!/[' ']/.test(event.target.value)) {
            setUsername(event.target.value);
        }
    }

    return <Card className='input'>
        <form onSubmit={authHandler}>
            <label htmlFor='username' className='white'>Username</label>
            <input id='username' type='text' value={username} onChange={usernameHandler}></input>
            <Select styles={style} options={options} onChange={selectHandler} />
            <Button type='submit' className='ml-1'>Change</Button>
            <Link to='/home' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <Button onClick={props.back} className='ml-1'>
                    Back
                </Button>
            </Link>
        </form>
    </Card>
}

export default AuthUser;