import React, { useState, useContext } from 'react';

import Button from '../UI/Button/Button';
import ProductContext from '../../context/product-context';
import BurgerItem from '../Products/Items/BurgerItem';
import ShowProducts from '../Products/ShowProducts';

const BuildBurger = (props) => {
    const [filter, setFilter] = useState('none');

    const ctx = useContext(ProductContext);

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
                {ctx.currentBurger.price !== 0 ? <Button onClick={() => ctx.setBurger()}>Add to Cart</Button> : ''}
            </section>
            <ShowProducts filter={filter}></ShowProducts>
        </>
    );
};
export default BuildBurger;