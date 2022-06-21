import React from 'react';

const BurgerItem = (props) => {
    const price = props.item.price;
    const burger = props.item;
    return <React.Fragment>
        <div className='fdir-row'>
            <div>Bun: {burger.bun !== '' ? burger.bun : 'None'}</div>
            <div>Meat: {burger.meat !== '' ? burger.meat : 'None'}</div>
            <div>Vegetables: {burger.veggies !== '' ? burger.veggies : 'None'}</div>
            <div>Topping: {burger.topping !== '' ? burger.topping : 'None'}</div>
            <div>Sauce: {burger.sauce !== '' ? burger.sauce : 'None'}</div>
        </div>
        <h3>
            {price !== 0 ? `$${price}` : ''}
        </h3>
    </React.Fragment>
}

export default BurgerItem;