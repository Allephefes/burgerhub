import axiosConnection from './config';

const getProducts = async () => {
    return await axiosConnection.get('/product').then(res => {
        return res.data;
    }).catch(err => {
        console.log(err);
    });
}

const createProducts = async (name, part, price) => {
    return await axiosConnection.post('/product', { name: name, part: part, price: price}).then(res => {
        return res.data;
    }).catch(err => {
        console.log(err);
    });
}

const Products = {getProducts, createProducts};

export default Products;