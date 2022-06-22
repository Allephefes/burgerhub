import React, { useContext } from 'react';

import ProductContext from '../../../context/product-context';
import Button from '../../UI/Button/Button';

const ProductItem = (props) => {
    const ctx = useContext(ProductContext);

    const setItem = (event) => {
        event.preventDefault();
        ctx.setItem(props.part, {name: props.name, price: props.price})
    }

    const price = `$${props.price}`

    return <li className='meal'>
        <div>
            <h3>{props.name}</h3>
            <div>{price}</div>
        </div>
        <Button className='form' onClick={setItem}>{ctx.currentBurger[props.part].name === '' || (props.part === 'meat' && props.name === ctx.currentBurger[props.part].name) ? '+ Add' : 'Change'}</Button>
    </li>
}

export default ProductItem;