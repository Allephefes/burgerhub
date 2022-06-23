import React, { useState, useEffect, useContext } from 'react';
import Products from '../../http/products';

import ProductContext from '../../context/product-context';
import ProductItem from './Items/ProductItem';
import Card from '../UI/Card/Card';

const ShowProducts = (props) => {
    const [products, setProducts] = useState([]);

    const ctx = useContext(ProductContext);

    useEffect(() => {
        const effect = async () => {
            return await Products.getProducts().then((products) => {
                    products = products.filter((product) => {
                        return product.part === props.filter;
                    })
                setProducts(products);
            })
        };
        effect();
    }, [props.filter, ctx]);

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