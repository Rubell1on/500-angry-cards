import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Wrapper from '../../components/wrapper/wrapper.jsx';
import CustomButton from '../../components/custom-button/custom-button.jsx';

import './winner.css';

export default function Winner() {
    const {id} = useParams();
    const history = useHistory();
    const playersString = localStorage.getItem('players');

    function restart() {
        ['players', 'playerAnswers'].forEach(e => localStorage.removeItem(e));
        history.push('/players');
    }
    
    if (playersString) {
        const playersList = JSON.parse(playersString);
        const player = playersList.find(p => p.id === Number(id));
        return (
            <Wrapper customClass="winner-window">
                <div className="winner">
                    <h1 className="winner__name">Победил игрок {player.name}!</h1>
                    <h2 className="winner__score">Со счетом {player.score}</h2>
                </div>
                <CustomButton customClass="winner-window__restart size_md background_green color_white" text="Заново" onClick={restart}/>
            </Wrapper>
        )
    } else {
        return (<h1>400</h1>);
    }
}