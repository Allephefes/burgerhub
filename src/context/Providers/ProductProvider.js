import React, { useReducer } from 'react';

import ProductContext from '../product-context';

const defaultProductState = {
    currentBurger: {
        bun: '',
        meat: '',
        veggies: '',
        topping: '',
        sauce: '',
        price: 0
    },
    burgers: [],
    amount: 0
}

const productReducer = (state, action) => {
    if (action.type === 'SET_BURGER') {
        const updatedBurgers = state.burgers.concat(action.burger);
        const updatedAmount = Math.round((state.amount + Number(action.burger.price)) * 100) / 100;
        return {
            currentBurger: {
                bun: '',
                meat: '',
                veggies: '',
                topping: '',
                sauce: '',
                price: 0
            },
            burgers: updatedBurgers,
            amount: updatedAmount
        }
    }
    else if (action.type === 'SET_ITEM') {
        const updatedBurger = state.currentBurger;
        if (updatedBurger[action.itemName] === '') {
            updatedBurger[action.itemName] = action.item;
            updatedBurger.price = Math.round((updatedBurger.price + Number(action.price)) * 100) / 100;
            return {
                currentBurger: updatedBurger,
                burgers: state.burgers,
                amount: state.amount
            }
        }
    }
    else if (action.type === 'DELETE_ITEM') {
        const updatedBurger = state.currentBurger;
        updatedBurger[action.itemName] = '';
        updatedBurger.price = Math.round((updatedBurger.price - Number(action.price)) * 100) / 100;
        return {
            currentBurger: updatedBurger,
            burgers: state.burgers,
            amount: state.amount
        }

    }
    return state;
}

const ProductProvider = (props) => {
    const [productState, dispatchProductAction] = useReducer(productReducer, defaultProductState);

    const setBurger = () => {
        dispatchProductAction({ type: 'SET_BURGER', burger: productState.currentBurger });
    }

    const removeBurger = (itemName, price) => {
        dispatchProductAction({ type: 'DELETE_BURGER', itemName: itemName, price: price })
    }

    const setItem = (itemName, item, price) => {
        dispatchProductAction({ type: 'SET_ITEM', itemName: itemName, item: item, price: price });
    }

    const removeItem = (itemName, price) => {
        dispatchProductAction({ type: 'DELETE_ITEM', itemName: itemName, price: price })
    }

    const productContext = {
        currentBurger: productState.currentBurger,
        burgers: productState.burgers,
        amount: productState.amount,
        setItem: setItem,
        setBurger: setBurger,
        removeItem: removeItem,
        removeBurger: removeBurger
    }

    return <ProductContext.Provider value={productContext}>
        {props.children}
    </ProductContext.Provider>
}

export default ProductProvider;