import React from 'react';

import './custom-button.css';

export default function CustomButton(props) {
    return (
        <input className={`custom-button ${props.customClass}`} type={props.type || "button"} value={props.text} {...props}/>
    )
}