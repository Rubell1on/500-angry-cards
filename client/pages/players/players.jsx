import React, {useState} from 'react';

import './players.css';

import Wrapper from '../../components/wrapper/wrapper.jsx';
import Label from '../../components/label/label.jsx';
import CustomInput from '../../components/custom-input/custom-input.jsx';
import CustomButton from '../../components/custom-button/custom-button.jsx';
import Player from '../../components/player/player.jsx';

export default function Players() {
    const [playersList, setPlayers] = useState([]);
    const [playerName, setPlayerName] = useState('');

    function handleRemove(id) {
        const playerIndex = playersList.findIndex(p => p.id === id);
        delete playersList[playerIndex];
        const newPlayersList = playersList.filter(() => true);
        setPlayers([...newPlayersList]);
    }

    function handleInput(e) {
        setPlayerName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (playersList.length) {
            const player = playersList[playersList.length - 1];
            setPlayers([...playersList, {id: player.id + 1, name: playerName}])
        } else {
            setPlayers([...playersList, {id: 1, name: playerName}]);
        }

        console.log(e);
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
                                <Player key={p.id} name={p.name}>
                                    <CustomButton customClass="player__remove color_white background_red size_sm" onClick={() => handleRemove(p.id)} text="-"/>
                                </Player>
                            )
                        })
                    : <div className="players__empty">Список игроков пуст!</div>
                }
            </div>
            <form className="player-form" action="" onSubmit={handleSubmit}>
                <CustomInput customClass="player-form__username" style={{width: 'calc(100% - 35px)'}} type="text" placeholder="Введите имя" onChange={handleInput} required/>
                <CustomButton customClass="player-form__submit color_white background_green size_sm" style={{marginRight: '5px', marginLeft: '5px'}} type="submit" text="+"/>
            </form>
            <CustomButton 
                customClass={`players__finish size_md`} 
                text="Закончить"
                onClick={() => console.log('hello')}
                disabled={playersList.length < 2 ? true : false}
            />
        </Wrapper>
    )
}

// class PlayersManager {
//     constructor() {
//         this.players = [];
//     }

//     addPlayer(player) {
//         this.players.push(player);
//     }
// }

// class Player {
//     constructor(name) {
//         this.name = name;
//         this.score
//     }
// }