import React from 'react';

import './wrapper.css';

export default function Wrapper({customclass, children}) {
    return (
        <div className={`wrapper ${customclass}`}>
            {children}
        </div>
    )
}