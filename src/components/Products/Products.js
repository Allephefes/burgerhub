import React, { useState } from 'react';

import ShowProducts from './ShowProducts';
import BuildBurger from './BuildBurger';

const Products = () => {
    const [filter, setFilter] = useState({ value: 'none' });

    const filterHandler = (value) => {
        setFilter({ value:value });
    }

    return <React.Fragment>
        <BuildBurger filterHandler={filterHandler}></BuildBurger>
        <ShowProducts filter={filter.value}></ShowProducts>
    </React.Fragment>;
}

export default Products;