import React, { useContext } from 'react';

import Modal from '../../UI/Modal/Modal';
import ProductContext from '../../../context/product-context';
import BurgerItem from '../../Products/ProductItem/BurgerItem';

const Cart = (props) => {
    const ctx = useContext(ProductContext);

    const cartItems = (
        ctx.burgers.map((burger) => {
            return <ul key={burger.meat} className='cart-item'>
                <BurgerItem item={burger}></BurgerItem>
            </ul>
            })
    );

    const totalAmount = ctx.amount;

    return <Modal>
        {cartItems}
        <div className='total'>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className='actions'>
            <button className='button--alt' onClick={props.close}>Close</button>
            <button className='button'>Order</button>
        </div>
    </Modal>
}

export default Cart;