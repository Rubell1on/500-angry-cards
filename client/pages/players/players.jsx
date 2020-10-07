import React, {useState} from 'react';

import './players.css';

import Wrapper from '../../components/wrapper/wrapper.jsx';
import Label from '../../components/label/label.jsx';
import CustomInput from '../../components/custom-input/custom-input.jsx';
import CustomButton from '../../components/custom-button/custom-button.jsx';
import Player from '../../components/player/player.jsx';
import { useHistory } from 'react-router-dom';

export default function Players() {
    const [playersList, setPlayers] = useState([]);
    const [playerName, setPlayerName] = useState('');
    const history = useHistory();

    function removePlayer(id) {
        const playerIndex = playersList.findIndex(p => p.id === id);
        delete playersList[playerIndex];
        const newPlayersList = playersList.filter(() => true);
        setPlayers([...newPlayersList]);
    }

    function handleInput(e) {
        setPlayerName(e.target.value);
    }

    function addPlayer(e) {
        e.preventDefault();
        if (playersList.length) {
            const player = playersList[playersList.length - 1];
            setPlayers([...playersList, {id: player.id + 1, name: playerName, score: 0}])
        } else {
            setPlayers([...playersList, {id: 1, name: playerName, score: 0}]);
        }

        e.target.firstChild.value = '';
    }

    function handleSubmit() {
        const string = JSON.stringify(playersList);
        localStorage.setItem('players', string);
        history.push('/words');
    }

    return (
        <Wrapper customClass="players">
            <Label className="players__header" text="Игроки" />
            {
                playersList.length > 0
                ? <div>Кол-во игроков: {playersList.length}</div>
                : null
            }
            <div className="players__list">
                {
                    playersList.length > 0 
                    ? playersList.map(p => {
                            return (
                                <Player customclass="player_justify_between" key={p.id} name={p.name}>
                                    <CustomButton customClass="player__remove color_white background_red size_sm" onClick={() => removePlayer(p.id)} text="-"/>
                                </Player>
                            )
                        })
                    : <div className="players__empty">Список игроков пуст!</div>
                }
            </div>
            <form className="player-form" action="" onSubmit={addPlayer}>
                <CustomInput customClass="player-form__username" style={{width: 'calc(100% - 35px)'}} type="text" placeholder="Введите имя" onChange={handleInput} required/>
                <CustomButton customClass="player-form__submit color_white background_green size_sm" style={{marginRight: '5px', marginLeft: '5px'}} type="submit" text="+"/>
            </form>
            <CustomButton 
                customClass={`players__finish size_md background_green color_white${playersList.length < 3 ? ' custom-button_disabled' : ''}`} 
                text="Дальше"
                onClick={handleSubmit}
                disabled={playersList.length < 3 ? true : false}
            />
        </Wrapper>
    )
}