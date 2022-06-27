import React, { useReducer } from 'react';

import ProductContext from '../product-context';

const defaultProductState = {
    currentBurger: {
        id: '',
        bun: { id: '', name: '', price: 0 },
        meat: { id: '', name: '', price: 0, amount: 0 },
        veggies: [],
        topping: { id: '', name: '', price: 0 },
        sauce: [],
        price: 0
    },
    price: 0,
    burgers: [],
    amount: 0
}

const idBuilder = (burger) => {
    let id = burger.bun.id;
    if(burger.meat.id !== '') {
        id = id + `-${burger.meat.id}${burger.meat.amount}`;
    }
    if(burger.veggies.length !== 0) {
        id = id + '-';
        burger.veggies.forEach((obj) => {
            id = id + `${obj.id}/0`;
        })
    }
    if(burger.topping.id !== '') {
        id = id + `-${burger.topping.id}`;
    }
    if(burger.sauce.length !== 0) {
        id = id + '-';
        burger.sauce.forEach((obj) => {
            id = id + `${obj.id}/0`;
        })
    }
    return id;
}

const productReducer = (state, action) => {
    if (action.type === 'SET_BURGER') {
        let burgers = state.burgers;
        const burger = action.burger;
        let updatedPrice = Math.round((state.price + Number(burger.price)) * 100) / 100;
        const storedId = localStorage.getItem('edited-burger');
        if(storedId) {
            const beforeEdit = burgers.filter((obj) => {
                return obj.id === burger.id;
            });
            burgers = burgers.filter((obj) => {
                return obj.id !== burger.id;
            });
            updatedPrice = Math.round((state.price - Number(beforeEdit.price)) * 100) / 100;
        }
        const amountOfBurgersAlike = burgers.filter((obj) => {return obj.id.split('#')[0] === (burger.id.split('#')[0])}).length;
        if(amountOfBurgersAlike !== 0) {
            burger.id = `${burger.id}#${amountOfBurgersAlike}`
        }
        const updatedBurgers = burgers.concat(burger);
        const updatedAmount = updatedBurgers.length;
        return {
            currentBurger: {
                id: '',
                bun: { id: '', name: '', price: 0 },
                meat: { id: '', name: '', price: 0, amount: 0 },
                veggies: [],
                topping: { id: '', name: '', price: 0 },
                sauce: [],
                price: 0
            },
            price: updatedPrice,
            burgers: updatedBurgers,
            amount: updatedAmount
        }
    }
    else if (action.type === 'DELETE_BURGER') {
        if(!action.burger) {
            return state;
        }
        const burgers = state.burgers;
        const updatedBurgers = burgers.filter((obj) => {
            return obj.id !== action.burger.id;
        });
        const updatedPrice = Math.round((state.amount - Number(action.burger.price)) * 100) / 100;
        const updatedAmount = updatedBurgers.length;
        return {
            currentBurger: state.currentBurger,
            price: updatedPrice,
            burgers: updatedBurgers,
            amount: updatedAmount
        }
    }
    else if (action.type === 'SET_ITEM') {
        const updatedBurger = state.currentBurger;
        const item = action.item;
        switch (item.part) {
            case 'bun':
            case 'topping': {
                updatedBurger.price = Math.round((updatedBurger.price - Number(updatedBurger[item.part].price) + Number(item.price)) * 100) / 100;
                updatedBurger[item.part] = item;
                updatedBurger.id = idBuilder(updatedBurger);
                return {
                    currentBurger: updatedBurger,
                    burgers: state.burgers,
                    price: state.price,
                    amount: state.amount
                }
            }
            case 'meat': {
                if (updatedBurger.meat.amount !== 0) {
                    if (updatedBurger.meat.name === item.name) {
                        updatedBurger.meat.amount = updatedBurger.meat.amount + 1;
                        updatedBurger.price = Math.round((updatedBurger.price + Number(updatedBurger.meat.price)) * 100) / 100;
                        updatedBurger.id = idBuilder(updatedBurger);
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
                    ...item,
                    amount: updatedBurger.meat.amount + 1
                }
                updatedBurger.price = Math.round((updatedBurger.price + Number(item.price)) * 100) / 100;
                updatedBurger.id = idBuilder(updatedBurger);
                return {
                    currentBurger: updatedBurger,
                    burgers: state.burgers,
                    price: state.price,
                    amount: state.amount
                }
            }
            case 'sauce':
            case 'veggies': {
                updatedBurger.price = Math.round((updatedBurger.price + Number(item.price)) * 100) / 100;
                updatedBurger[item.part] = updatedBurger[item.part].concat(item);
                updatedBurger.id = idBuilder(updatedBurger);
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
        const item = action.item;
        switch (item.part) {
            case 'bun':
            case 'topping': {
                updatedBurger.price = Math.round((updatedBurger.price - Number(item.price)) * 100) / 100;
                updatedBurger[item.part] = { id: '', name: '', price: 0 };
                updatedBurger.id = idBuilder(updatedBurger);
                return {
                    currentBurger: updatedBurger,
                    burgers: state.burgers,
                    price: state.price,
                    amount: state.amount
                }
            }
            case 'meat': {
                updatedBurger.price = Math.round((updatedBurger.price - Number(item.price)) * 100) / 100;
                if (updatedBurger.meat.amount === 1) {
                    updatedBurger.meat = { id: '', name: '', price: 0, amount: 0 };
                    updatedBurger.id = idBuilder(updatedBurger);
                    return {
                        currentBurger: updatedBurger,
                        burgers: state.burgers,
                        price: state.price,
                        amount: state.amount
                    }
                }
                updatedBurger.meat = {
                    ...updatedBurger.meat,
                    amount: updatedBurger.meat.amount - 1
                }
                updatedBurger.id = idBuilder(updatedBurger);
                return {
                    currentBurger: updatedBurger,
                    burgers: state.burgers,
                    price: state.price,
                    amount: state.amount
                }
            }
            case 'sauce':
            case 'veggies': {
                updatedBurger.price = Math.round((updatedBurger.price - Number(item.price)) * 100) / 100;
                updatedBurger[item.part] = updatedBurger[item.part].filter((obj) => {
                    return obj.name !== item.name
                });
                updatedBurger.id = idBuilder(updatedBurger);
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
    else if (action.type === 'SET_CURRENT_BURGER') {
        return {
            currentBurger: action.burger,
            price: state.price,
            burgers: state.burgers,
            amount: state.amount
        }
    }
}

const ProductProvider = (props) => {
    const [productState, dispatchProductAction] = useReducer(productReducer, defaultProductState);

    const setBurger = () => {
        dispatchProductAction({ type: 'SET_BURGER', burger: productState.currentBurger });
    }

    const removeBurger = (burger) => {
        dispatchProductAction({ type: 'DELETE_BURGER', burger: burger });
    }

    const goodBurger = () => {
        const burger = productState.currentBurger;
        if(burger.bun.id === '' || burger.meat.id === '') {
            return false;
        }
        return true;
    }

    const getBurger = (id) => {
        const burgers = productState.burgers;
        console.log(burgers)
        return burgers.filter((obj) => {
            return obj.id === id;
        })[0];
    }

    const setItem = (item) => {
        dispatchProductAction({ type: 'SET_ITEM', item: item });
    }

    const removeItem = (item) => {
        dispatchProductAction({ type: 'DELETE_ITEM', item: item})
    }

    const getItem = (item) => {
        const burger = productState.currentBurger;
        if(/veggies|sauce/.test(item.part)) {
            return burger[item.part].filter((obj) => {return obj.name === item.name}).length !== 0;
        }
        else {
            return burger[item.part].name === item.name;
        }
    }

    const setCurrentBurger = (burger) => {
        if(!burger) {
            burger = {
                id: '',
                bun: { id: '', name: '', price: 0 },
                meat: { id: '', name: '', price: 0, amount: 0 },
                veggies: [],
                topping: { id: '', name: '', price: 0 },
                sauce: [],
                price: 0
            };
        }
        dispatchProductAction({ type: 'SET_CURRENT_BURGER', burger: burger})
    }

    const productContext = {
        currentBurger: productState.currentBurger,
        burgers: productState.burgers,
        price: productState.price,
        amount: productState.amount,
        setItem: setItem,
        getItem: getItem,
        removeItem: removeItem,
        setBurger: setBurger,
        getBurger: getBurger,
        removeBurger: removeBurger,
        goodBurger: goodBurger,
        setCurrentBurger: setCurrentBurger
    }

    return <ProductContext.Provider value={productContext}>
        {props.children}
    </ProductContext.Provider>
}

export default ProductProvider;