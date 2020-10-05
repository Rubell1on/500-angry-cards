import React, {useState, useEffect} from 'react';
import Player from '../../components/player/player.jsx';
import Wrapper from '../../components/wrapper/wrapper.jsx';
import Label from '../../components/label/label.jsx';
import Card from '../../components/modal windows/card/card.jsx';
import CustomButton from '../../components/custom-button/custom-button.jsx';

import './words.css';
import { useHistory } from 'react-router-dom';

export default function Words() {
    let playersList;
    const [isCardsOpened, setCardState] = useState(false);
    const [playerAnswers, setplayerAnswers] = useState([]);
    const [currentPlayer, setCurrentPlayer] = useState({});
    const playersString = localStorage.getItem('players');
    const history = useHistory();

    function checkText(id) {
        const playerText = playerAnswers.find(p => p.id === id);

        if (!!playerText) {
            return playerText.text ? true : false;
        } else {
            return false
        }
    }

    function handleCardSubmit(e, text) {
        e.preventDefault();
        const {id} = currentPlayer;
        let temp = playerAnswers;
        if (checkText(id)) {
            temp = temp.filter(p => p.id !== id);
        }

        clearInput();

        setplayerAnswers([...temp, {id, text}]);
        setCardState(false);

        function clearInput() {
            e.target.elements['player-text'].value = '';
        }
    }

    function handlePlayerClick(id) {
        const player = playersList.find(p => p.id === id);
        setCurrentPlayer(player);
        setCardState(true);
    }

    function handleCardClose() {
        setCardState(false);
    }

    function handleSubmit() {
        const str = JSON.stringify(playerAnswers);
        localStorage.setItem('playerAnswers', str);
        history.push('/final');
    }

    if (playersString) {
        playersList = JSON.parse(playersString);

        return (
            <>
                {
                    isCardsOpened
                    ? <Card name={currentPlayer.name} onSubmit={handleCardSubmit} onClose={handleCardClose}/>
                    : null
                }
                <Wrapper>
                    <Label text="Стадия импровизации" />
                    <div className="players-list">
                        {
                            playersList.map(p => {
                                return (
                                    <Player customclass={checkText(p.id) ? 'player_background_green' : ''} key={p.id} userId={p.id} name={p.name} onClick={handlePlayerClick}>

                                    </Player>
                                )
                            })
                        }
                    </div>
                    <CustomButton customClass={`players-list__continue background_green size_md color_white${playerAnswers.length > 1 ? '' : ' custom-button_disabled'}`} text="Финалочка" onClick={handleSubmit} disabled={playerAnswers.length > 1 ? false : true}/>
                </Wrapper>
            </>
        )
    } else {
        return (
            <Wrapper>
                <Label text="Прежде чем играть необходимо ввести имена игроков!"/>
            </Wrapper>
        )
    }
}