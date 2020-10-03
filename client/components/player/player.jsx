import React from 'react';

import './player.css';

export default function Player({name, children}) {
    return (
        <div className="player">
            <div className="player__name">{name}</div>
            {children}
        </div>
    )
}