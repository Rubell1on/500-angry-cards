import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Winner() {
    const {id} = useParams();
    const playersString = localStorage.getItem('players');
    
    if (playersString) {
        const playersList = JSON.parse(playersString);
        const player = playersList.find(p => p.id === Number(id));
        return (
            <div className="winner">
                <h1 className="winner__name">Победил игрок {player.name}!</h1>
                <h2 className="winner__score">Со счетом {player.score}</h2>
            </div>
        )
    } else {
        return (<h1>400</h1>);
    }
}