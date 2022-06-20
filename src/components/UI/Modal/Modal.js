import React from 'react';

import Backdrop from '../Backdrop';

const Modal = (props) => {
    return <React.Fragment>
        <Backdrop />
        <div className='modal'>
            <div className='content'>{props.children}</div>
        </div>
    </React.Fragment>
}

export default Modal;