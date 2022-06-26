import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import BurgerItem from '../Products/Items/BurgerItem';

import ProductContext from '../../context/product-context';

const Suggestions = () => {
    const ctx = useContext(ProductContext);

    const suggestedBurgers = [
        {
            id: '1-31-4/010/017/0-6-8/0',
            bun: { id: '1', name: 'Whole Grain Bun', price: 1 },
            meat: { id: '3', name: 'Beef', price: 0.99, amount: 1 },
            veggies: [
                { id: 4, name: 'Tomato', part: 'veggies', price: '0.24' },
                { id: 10, name: 'Onion', part: 'veggies', price: '0.59' },
                { id: 17, name: 'lettuce', part: 'veggies', price: '4.20' }
            ],
            topping: { id: 6, name: 'Cheese', part: 'topping', price: '1.24' },
            sauce: [
                { id: 8, name: 'Mayo', part: 'sauce', price: '0.04' }
            ],
            price: 8.3
        },
        {
            id: '14-111-4/010/017/020/022/0-21-16/015/0',
            bun: { id: 14, name: 'Briosch', part: 'bun', price: '1.34' },
            meat: { id: 11, name: 'Schnitzel', part: 'meat', price: '1.24', amount: 1 },
            veggies: [
                { id: 4, name: 'Tomato', part: 'veggies', price: '0.24' },
                { id: 10, name: 'Onion', part: 'veggies', price: '0.59' },
                { id: 17, name: 'lettuce', part: 'veggies', price: '4.20' },
                { id: 20, name: 'pickled onions', part: 'veggies', price: '4.20' },
                { id: 22, name: 'jalapeño', part: 'veggies', price: '4.20' }
            ],
            topping: { id: 21, name: 'caramelized onions', part: 'topping', price: '4.20' },
            sauce: [
                { id: 16, name: 'tchina', part: 'sauce', price: '0.04' },
                { id: 15, name: 'amba', part: 'sauce', price: '0.04' }
            ],
            price: 20.29
        },
        {
            id: '',
            bun: { id: '', name: '', price: 0 },
            meat: { id: '', name: '', price: 0, amount: 0 },
            veggies: [],
            topping: { id: '', name: '', price: 0 },
            sauce: [],
            price: 0
        }
    ];
    return <>
        <Card>
            <Button>
                <Link to='/kitchen' style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={() => {ctx.setCurrentBurger(suggestedBurgers[0])}}>
                    <h2>Classic Lover</h2>
                    <BurgerItem item={suggestedBurgers[0]}></BurgerItem>
                </Link>
            </Button>
            <Button>
                <Link to='/kitchen' style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={() => {ctx.setCurrentBurger(suggestedBurgers[1])}}>
                    <h2>Crazy Hunter</h2>
                    <BurgerItem item={suggestedBurgers[1]}></BurgerItem>
                </Link>
            </Button>
        </Card>
        <Card>
            <Button>
                <Link to='/kitchen' style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={() => {ctx.setCurrentBurger(suggestedBurgers[2])}}>
                    Build Your Own!!!
                </Link>
            </Button>
        </Card>
    </>
}

export default Suggestions;