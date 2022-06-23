import React, { useState } from 'react';
import Select from 'react-select';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';

import Products from '../../http/products';

const AddProduct = () => {
    const [product, setProduct] = useState({name:'', part:'', price:''});

    const options = [
        {value: 'bun', label: 'bun'},
        {value: 'meat', label: 'meat'},
        {value: 'veggies', label: 'veggies'},
        {value: 'topping', label: 'topping'},
        {value: 'sauce', label: 'sauce'}
    ];

    const style = {
        option: (provided, state) => ({
            ...provided,
            borderBottom: '1px dotted pink',
            color: state.isSelected ? 'black' : 'blue',
            padding: 20
        })
    }

    const selectHandler = (event) => {
        setProduct({...product, part:event.value});
    }

    const addProductHandler = async () => {
        if (product.name.trim().length === 0 && product.price.trim().length === 0 && product.part.trim().length === 0) {
            return;
        }

        await Products.createProducts(product.name, product.part, product.price);

        setProduct({name:'', part:'', price:''});
    }

    const nameHandler = (event) => {
            setProduct({...product, name:event.target.value});
    }

    const priceHandler = (event) => {
        if (!/[' A-Za-z']/.test(event.target.value)) {
            setProduct({...product, price:event.target.value});   
        }
    }

    return <Card className='input'>
        <form onSubmit={addProductHandler}>
            <Select styles={style} options={options} onChange={selectHandler} />
            <label htmlFor='name' className='white'>Name</label>
            <input id='name' type='text' value={product.name} onChange={nameHandler} />
            <label htmlFor='price' className='white'>Price</label>
            <input id='price' type='text' value={product.price} onChange={priceHandler} />
            <Button type='submit' className='ml-1'>Add</Button>
        </form>
    </Card>
}

export default AddProduct;