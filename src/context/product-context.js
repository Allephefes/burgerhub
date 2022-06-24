import React from 'react';

const ProductContext = React.createContext({
    currentBurger: {
        bun: { name: '', price: 0 },
        meat: { name: '', price: 0, amount: 0 },
        veggies: [],
        topping: { name: '', price: 0 },
        sauce: [],
        price: 0
    },
    burger: [],
    price: 0,
    amount: 0,
    setItem: () => { },
    setBurger: () => { },
    goodBurger : () => { },
    getItem: () => { },
    removeItem: () => { }
});

export default ProductContext;