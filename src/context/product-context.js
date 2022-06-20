import React from 'react';

const ProductContext = React.createContext({
    currentBurger: {
        bun: '', 
        meat: '', 
        veggies: '',
        topping: '',
        sauce: '',
        price: 0
    },
    burger: [],
    amount: 0,
    setItem: () => {},
    setBurger: () => {},
    removeItem: () => {}
});

export default ProductContext;