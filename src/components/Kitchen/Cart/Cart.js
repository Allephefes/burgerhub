import React, { useContext } from 'react';

import Modal from '../../UI/Modal/Modal';
import ProductContext from '../../../context/product-context';
import BurgerItem from '../../Products/Items/BurgerItem';
import Button from '../../UI/Button/Button';

const Cart = (props) => {
    const ctx = useContext(ProductContext);

    const cartItems = (
        ctx.burgers.map((burger) => {
            return <ul key={burger.id} className='cart-item'>
                <BurgerItem item={burger}>
                    <div>
                        <Button onClick={() => { ctx.removeBurger(burger); }}>Remove</Button>
                    </div>
                    <div>
                        <Button onClick={() => {
                            localStorage.setItem('edited-burger', burger.id);
                            ctx.setCurrentBurger(burger);
                            props.close();
                        }}>Edit</Button>
                    </div>
                </BurgerItem>
            </ul>
        })
    );

    const totalAmount = ctx.price;

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