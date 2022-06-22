import React, { useState } from 'react';

import ShowProducts from './ShowProducts';
import BuildBurger from './BuildBurger';

const Products = () => {
    const [filter, setFilter] = useState('none');

    const filterHandler = (value) => {
        setFilter(value);
    }

    return <React.Fragment>
        <BuildBurger filterHandler={filterHandler}></BuildBurger>
        <ShowProducts filter={filter}></ShowProducts>
    </React.Fragment>;
}

export default Products;