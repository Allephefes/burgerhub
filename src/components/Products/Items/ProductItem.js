import React, { useContext } from 'react';

import ProductContext from '../../../context/product-context';
import Button from '../../UI/Button/Button';

const ProductItem = (props) => {
    const ctx = useContext(ProductContext);

    let usedProduct = ctx.getItem(props.part, props.name);
    const price = `$${props.price}`

    const setItem = (event) => {
        event.preventDefault();
        ctx.setItem(props.part, { name: props.name, price: props.price })
    }

    const removeItem = (event) => {
        event.preventDefault();
        ctx.removeItem(props.part, props.name);
    }

    return <li className='meal'>
        <div>
            <h3>{props.name}</h3>
            <div>{price}</div>
        </div>
        <div className='dis-flex'>
        {usedProduct ?
            <Button className='form' onClick={removeItem}>
                Remove
            </Button> : ''
        }
        {(props.name === ctx.currentBurger.meat.name && ctx.currentBurger.meat.amount <= 4) || !usedProduct ?
            <Button className='form' onClick={setItem}>
                {ctx.currentBurger[props.part].name === '' || usedProduct || /veggies|sauce/.test(props.part) ? '+ Add' : 'Change'}
            </Button> : 
            ''
        }
        </div>
    </li>
}

export default ProductItem;