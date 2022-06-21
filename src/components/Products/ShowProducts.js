import React, { useState, useEffect } from 'react';
import Products from '../../http/products';

import './Products.css';
import ProductItem from './ProductItem/ProductItem';
import Card from '../UI/Card/Card';

const ShowProducts = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const effect = async () => {
            return await Products.getProducts().then((products) => {
                if(props.filter) {
                    products = products.filter((product) => {
                        return product.part === props.filter;
                    })
                }
                setProducts(products);
            })
        };
        effect();
    }, [props.filter]);

    return <section className='meals'>
        <Card className='white'>
            <ul>
                {products.map((product) => {
                    return <ProductItem
                        className='ml-1'
                        key={product.id}
                        name={product.name}
                        part={product.part}
                        price={product.price}>
                    </ProductItem>;
                })}
            </ul>
        </Card>
    </section>
};

export default ShowProducts;