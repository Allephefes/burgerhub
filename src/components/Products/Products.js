import React, { useReducer } from 'react';

import ShowProducts from './ShowProducts';
import BuildBurger from './BuildBurger';

const filterReducer = (state, action) => {
    if (action.type === 'SELECT_ITEM') {
        return {
                value: action.value
        }
    }
}

const Products = (props) => {
    const [filter, setFilter] = useReducer(filterReducer, { value: 'none' });

    const filterHandler = (value) => {
        setFilter({ type: 'SELECT_ITEM', value:value });
    }

    return <React.Fragment>
        <BuildBurger filterHandler={filterHandler}></BuildBurger>
        <ShowProducts filter={filter.value}></ShowProducts>
    </React.Fragment>;
}

export default Products;