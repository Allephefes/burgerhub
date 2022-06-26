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
    setBurger: () => { },
    getBurger: () => { },
    goodBurger : () => { },
    removeBurger: () => { },
    setItem: () => { },
    getItem: () => { },
    removeItem: () => { },
    setCurrentBurger: () => { }
});

export default ProductContext;