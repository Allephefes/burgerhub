import axiosConnection from './config';

const getProducts = async () => {
    return await axiosConnection.get('/product').then(res => {
        return res.data;
    }).catch(err => {
        console.log(err);
    });
}

const Products = {getProducts};

export default Products;