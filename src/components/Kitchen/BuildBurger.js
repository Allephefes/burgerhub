import React, { useState, useContext } from 'react';
import Select from 'react-select';

import Button from '../UI/Button/Button';
import ProductContext from '../../context/product-context';
import BurgerItem from '../Products/Items/BurgerItem';
import ShowProducts from '../Products/ShowProducts';

const BuildBurger = (props) => {
    const [filter, setFilter] = useState('none');

    const ctx = useContext(ProductContext);

    const options = [
        { value: 'bun', label: 'bun' },
        { value: 'meat', label: 'meat' },
        { value: 'veggies', label: 'veggies' },
        { value: 'topping', label: 'topping' },
        { value: 'sauce', label: 'sauce' }
    ];

    const style = {
        option: (provided, state) => ({
            ...provided,
            borderBottom: '1px dotted pink',
            color: state.isSelected ? 'black' : 'blue',
            padding: 20,
        })
    }

    const handler = (event) => {
        setFilter(event.value);
    }

    return (
        <React.Fragment>
            <section className='summary'>
                <h2>Build Your Burger!</h2>
                <BurgerItem item={ctx.currentBurger}></BurgerItem>
                <Select styles={style} options={options} onChange={handler} />
                {ctx.currentBurger.price !== 0 ? <Button onClick={() => ctx.setBurger()}>Add to Cart</Button> : ''}
            </section>
            <ShowProducts filter={filter}></ShowProducts>
        </React.Fragment>
    );
};
export default BuildBurger;