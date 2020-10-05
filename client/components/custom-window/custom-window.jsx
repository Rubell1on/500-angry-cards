import React from 'react';

import './custom-window.css';

export default function CustomWindow({children}) {
    return (
        <div className="custom-window">
            {children}
        </div>
    )
}