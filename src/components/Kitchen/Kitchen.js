import React from 'react';

import Header from '../Header/Header';
import Button from '../UI/Button/Button';
import KitchenHeader from '../../assets/burger-header.jpg';
import Products from '../Products/Products';

const Kitchen = (props) => {
    return <React.Fragment>
        <Header>
            <Button>Cart</Button>
        </Header>
        <div className='main-image'>
            <img src={KitchenHeader} alt='Table full of YUMMY!'></img>
        </div>
        <Products></Products>
    </React.Fragment>
}

export default Kitchen;