import React, { useState, useContext } from 'react';

import Button from '../UI/Button/Button';
import ProductContext from '../../context/product-context';
import BurgerItem from '../Products/Items/BurgerItem';
import ShowProducts from '../Products/ShowProducts';

const BuildBurger = () => {
    const [filter, setFilter] = useState('none');

    const ctx = useContext(ProductContext);

    const addToCartHandler = (event) => {
        event.preventDefault();
        ctx.setBurger();
        const id = localStorage.getItem('edited-burger');
        if (id) {
            localStorage.removeItem('edited-burger');
        }
    }

    return (
        <>
            <section className='summary'>
                <h2>Build Your Burger!</h2>
                <BurgerItem item={ctx.currentBurger}>
                    <div className='fdir-row'>
                        <div>
                            <Button onClick={() => { setFilter('bun'); }}>Edit</Button>
                        </div>
                        <div>
                            <Button onClick={() => { setFilter('meat'); }}>Edit</Button>
                        </div>
                        <div>
                            <Button onClick={() => { setFilter('veggies'); }}>Edit</Button>
                        </div>
                        <div>
                            <Button onClick={() => { setFilter('topping'); }}>Edit</Button>
                        </div>
                        <div>
                            <Button onClick={() => { setFilter('sauce'); }}>Edit</Button>
                        </div>
                    </div>
                </BurgerItem>
                {ctx.goodBurger() ?
                    <Button onClick={addToCartHandler}>
                        Add to Cart
                    </Button> :
                    ''
                }
                {ctx.currentBurger.id !== '' ?
                    <Button onClick={() => {ctx.setCurrentBurger()}}>
                        Clear
                    </Button> :
                    ''
                }
            </section>
            <ShowProducts filter={filter}></ShowProducts>
        </>
    );
};
export default BuildBurger;