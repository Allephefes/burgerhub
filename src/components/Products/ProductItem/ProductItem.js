import React, { useContext } from 'react';

import ProductItemForm from './ProductItemForm';
import ProductContext from '../../../context/product-context';

const ProductItem = (props) => {
    const ctx = useContext(ProductContext);

    const setItem = (event) => {
        event.preventDefault();
        ctx.setItem(props.part, props.name, props.price)
    }

    const price = `$${props.price}`

    return <li className='meal'>
        <div>
            <h3>{props.name}</h3>
            <div>{price}</div>
        </div>
        <ProductItemForm setItem={setItem}>+ Add</ProductItemForm>
    </li>
}

export default ProductItem;