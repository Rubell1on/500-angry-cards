import React from 'react';

import './label.css';

export default function Label({text, customclass}) {
    return (
        <div className={`label${customclass ? ` ${customclass}` : ''}`}>{text}</div>
    )
}