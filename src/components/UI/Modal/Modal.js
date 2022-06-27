import React from 'react';

import Backdrop from '../Backdrop';

const Modal = (props) => {
    return <>
        <Backdrop />
        <div className='modal'>
            <div className='content'>{props.children}</div>
        </div>
    </>
}

export default Modal;