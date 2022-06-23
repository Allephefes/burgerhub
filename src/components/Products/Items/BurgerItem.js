import React from 'react';

const BurgerItem = (props) => {
    const price = props.item.price;
    const burger = props.item;

    return <React.Fragment>
        <div className='fdir-column'>
            <div className='fdir-row'>
                <div className='item'>Bun: {burger.bun.name !== '' ? burger.bun.name : '-'}</div>
                <div className='item'>Meat: {burger.meat.name !== '' ? `${burger.meat.name} x ${burger.meat.amount}` : '-'}</div>
                <div className='item'>Vegetables: {burger.veggies.length !== 0 ? burger.veggies.map((v) => { return `${v.name} ` }) : '-'}</div>
                <div className='item'>Topping: {burger.topping.name !== '' ? burger.topping.name : '-'}</div>
                <div className='item'>Sauce: {burger.sauce.length !== 0 ? burger.sauce.map((s) => { return `${s.name} ` }) : '-'}</div>
            </div>
            {props.children}
        </div>
        <h3>
            {price !== 0 ? `$${price}` : ''}
        </h3>
    </React.Fragment>
}

export default BurgerItem;