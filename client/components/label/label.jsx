import React, { Children } from 'react';

import './label.css';

export default function Label({text, customclass, children}) {
    return (
        <div className={`label${customclass ? ` ${customclass}` : ''}`}>{text}{children}</div>
    )
}