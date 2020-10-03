import React from 'react';

import './wrapper.css';

export default function Wrapper({customClass, children}) {
    return (
        <div className={`wrapper ${customClass}`}>
            {children}
        </div>
    )
}