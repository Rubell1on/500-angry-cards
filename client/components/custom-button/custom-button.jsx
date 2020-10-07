import React from 'react';

import './custom-button.css';

export default function CustomButton(props) {
    return (
        <input className={`custom-button ${props.customclass}`} type={props.type || "button"} value={props.text} {...props}/>
    )
}