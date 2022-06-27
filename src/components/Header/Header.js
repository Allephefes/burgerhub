import React from 'react';
import { Link } from 'react-router-dom';

import HeaderIcon from './HeaderIcon';

const Header = (props) => {
    return <>
        <header className='header'>
            <Link to='/home' style={{ color: 'inherit', textDecoration: 'inherit'}}><HeaderIcon /></Link>
            {props.children}
        </header>
    </>
};

export default Header;