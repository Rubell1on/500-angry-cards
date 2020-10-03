import React from 'react';

import './custom-input.css';

export default function CustomInput(props) {
    return (
        <input className={`custom-input ${props.customClass}`} {...props}/>
    )
}