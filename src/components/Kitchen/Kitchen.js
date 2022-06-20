import React, { useState } from 'react';

import Header from '../Header/Header';
import CartIcon from './Cart/CartIcon';
import Cart from './Cart/Cart';
import KitchenHeader from '../../assets/burger-header.jpg';
import Products from '../Products/Products';

import ProductProvider from '../../context/Providers/ProductProvider';

const Kitchen = () => {
    const [cart, setCart] = useState(false);

    const cartIconHandler = () => {
        setCart(!cart);
    }

    return <ProductProvider>
        <Header>
            <CartIcon onClick={cartIconHandler}></CartIcon>
        </Header>
        <div className='main-image'>
            <img src={KitchenHeader} alt='Table full of YUMMY!'></img>
        </div>
        {cart ? <Cart close={cartIconHandler}></Cart> : ''}
        <Products></Products>
    </ProductProvider>
}

export default Kitchen;