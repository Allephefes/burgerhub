import React, { useContext } from 'react';

import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';

import ProductContext from '../../../context/product-context';

const CartIcon = (props) => {
    const productCtx = useContext(ProductContext);

    return <Button onClick={props.onClick}>
        Cart
        <Card>{productCtx.amount}</Card>
    </Button>
}

export default CartIcon;