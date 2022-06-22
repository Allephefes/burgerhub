import React, { useReducer } from 'react';

import ProductContext from '../product-context';

const defaultProductState = {
    currentBurger: {
        bun: { name: '', price: 0 },
        meat: { name: '', price: 0, amount: 0 },
        veggies: [],
        topping: { name: '', price: 0 },
        sauce: [],
        price: 0
    },
    price: 0,
    burgers: [],
    amount: 0
}

const productReducer = (state, action) => {
    if (action.type === 'SET_BURGER') {
        const updatedBurgers = state.burgers.concat(action.burger);
        const updatedPrice = Math.round((state.amount + Number(action.burger.price)) * 100) / 100;
        const updatedAmount = updatedBurgers.length;
        return {
            currentBurger: {
                bun: { name: '', price: 0 },
                meat: { name: '', price: 0, amount: 0 },
                veggies: [],
                topping: { name: '', price: 0 },
                sauce: [],
                price: 0
            },
            price: updatedPrice,
            burgers: updatedBurgers,
            amount: updatedAmount
        }
    }
    else if (action.type === 'SET_ITEM') {
        const updatedBurger = state.currentBurger;
        switch (action.itemName) {
            case 'bun':
            case 'topping': {
                updatedBurger.price = Math.round((updatedBurger.price - Number(updatedBurger[action.itemName].price) + Number(action.item.price)) * 100) / 100;
                updatedBurger[action.itemName] = action.item;
                return {
                    currentBurger: updatedBurger,
                    burgers: state.burgers,
                    price: state.price,
                    amount: state.amount
                }
            }
            case 'meat': {
                if (updatedBurger.meat.amount !== 0) {
                    if (updatedBurger.meat.name === action.item.name) {
                        updatedBurger.meat.amount = updatedBurger.meat.amount + 1;
                        updatedBurger.price = Math.round((updatedBurger.price + Number(updatedBurger.meat.price)) * 100) / 100;
                        return {
                            currentBurger: updatedBurger,
                            burgers: state.burgers,
                            price: state.price,
                            amount: state.amount
                        }
                    }
                    else {
                        updatedBurger.price = Math.round((updatedBurger.price - Number(updatedBurger.meat.price) * updatedBurger.meat.amount) * 100) / 100;
                        updatedBurger.meat.amount = 0;
                    }
                }
                updatedBurger.meat = {
                    name: action.item.name,
                    price: action.item.price,
                    amount: updatedBurger.meat.amount + 1
                }
                updatedBurger.price = Math.round((updatedBurger.price + Number(action.item.price)) * 100) / 100;
                return {
                    currentBurger: updatedBurger,
                    burgers: state.burgers,
                    price: state.price,
                    amount: state.amount
                }
            }
            case 'sauce':
            case 'veggies': {
                updatedBurger.price = Math.round((updatedBurger.price + Number(action.item.price)) * 100) / 100;
                updatedBurger[action.itemName] = updatedBurger[action.itemName].concat(action.item);
                return {
                    currentBurger: updatedBurger,
                    burgers: state.burgers,
                    price: state.price,
                    amount: state.amount
                }
            }
            default: {
                return {
                    currentBurger: state.currentBurger,
                    price: state.price,
                    burgers: state.burgers,
                    amount: state.amount
                }
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
            price: state.price,
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

    const setItem = (itemName, item) => {
        dispatchProductAction({ type: 'SET_ITEM', itemName: itemName, item: item });
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