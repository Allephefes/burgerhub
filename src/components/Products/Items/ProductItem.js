import React, { useContext } from 'react';

import ProductContext from '../../../context/product-context';
import Button from '../../UI/Button/Button';

const ProductItem = (props) => {
    const ctx = useContext(ProductContext);

    const product = props.product;
    const price = `$${product.price}`;
    let usedProduct = ctx.getItem(product);

    const setItem = (event) => {
        event.preventDefault();
        ctx.setItem(product)
    }

    const removeItem = (event) => {
        event.preventDefault();
        ctx.removeItem(product);
    }

    return <li className='meal'>
        <div>
            <h3>{product.name}</h3>
            <div>{price}</div>
        </div>
        <div className='dis-flex'>
            {(product.name === ctx.currentBurger.meat.name && ctx.currentBurger.meat.amount <= 4) || !usedProduct ?
                <Button className='form' onClick={setItem}>
                    {ctx.currentBurger[product.part].name === '' || usedProduct || /veggies|sauce/.test(product.part) ? '+ Add' : 'Change'}
                </Button> :
                ''
            }
            {usedProduct ?
                <Button className='form' onClick={removeItem}>
                    Remove
            </Button> : ''
            }
        </div>
    </li>
}

export default ProductItem;