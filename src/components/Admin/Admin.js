import React from 'react';

import Header from '../Header/Header';
import AuthUser from '../Users/AuthUser';
import AddProduct from '../Products/AddProduct';

const Admin = () => {
    return <div>
        <Header />
        <AuthUser />
        <AddProduct />
    </div>
}

export default Admin;