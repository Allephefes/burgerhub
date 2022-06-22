import React from 'react';

const BurgerItem = (props) => {
    const price = props.item.price;
    const burger = props.item;
    return <React.Fragment>
        <div className='fdir-row'>
            <div>Bun: {burger.bun.name !== '' ? burger.bun.name : 'None'}</div>
            <div>Meat: {burger.meat.name !== '' ? `${burger.meat.name} x ${burger.meat.amount}` : 'None'}</div>
            <div>Vegetables: {burger.veggies.length !== 0 ? burger.veggies.map((v) => {return `${v.name} `}) : 'None'}</div>
            <div>Topping: {burger.topping.name !== '' ? burger.topping.name : 'None'}</div>
            <div>Sauce: {burger.sauce.length !== 0 ? burger.sauce.map((s) => {return `${s.name} `}) : 'None'}</div>
        </div>
        <h3>
            {price !== 0 ? `$${price}` : ''}
        </h3>
    </React.Fragment>
}

export default BurgerItem;