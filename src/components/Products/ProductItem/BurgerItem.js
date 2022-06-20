import React from 'react';

const BurgerItem = (props) => {
    const price = props.item.price;
    const burger = Object.values(props.item).filter(value => value !== '').map((value, index, arr) => {
        if(index === arr.length - 1) {
            return '';
        }
        if(index === 0) {
            return <div>{value}</div>;
        }
        return <div>, {value}</div>;
    });    
    return <div>
        <div>
            {burger}
        </div>
        <div>
            {price !== 0 ? `$${price}` : ''}
        </div>
    </div>
}

export default BurgerItem;