import React from 'react';

import './player.css';

export default function Player({userId, customclass, name, children, onClick = () => {}}) {
    function handleClick() {
        onClick(userId);
    }

    return (
        <div className={`player${customclass ? ` ${customclass}` : ''}`} onClick={handleClick}>
            {name ? <div className="player__name">{name}</div> : null}
            {children}
        </div>
    )
}