import React from 'react';

//import Button from '../../UI/Button/Button';

const ProductItemForm = (props) => {
    return <form className='form' onSubmit={props.setItem}>
        <button type='submit'>{props.children}</button>
    </form>
}

export default ProductItemForm;