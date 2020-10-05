import React, {useState} from 'react';

import Wrapper from '../../components/wrapper/wrapper.jsx';
import Label from '../../components/label/label.jsx';
import Player from '../../components/player/player.jsx';
import CustomButton from '../../components/custom-button/custom-button.jsx';
import { useHistory } from 'react-router-dom';

export default function Final() {
    const [gameFinished, setGameState] = useState(false);
    const playersString = localStorage.getItem('players');
    const answersString = localStorage.getItem('playerAnswers');
    const history = useHistory();

    if (playersString && answersString) {
        const tempPlayers = JSON.parse(playersString);
        const tempAnswers = JSON.parse(answersString);

        function handlePlayerClick(id) {
            const ind = playersList.findIndex(p => p.id === id);
            playersList[ind].score+=1;
            setPlayers([...playersList]);
            setGameState(true);
        }

        function handleSubmit() {
            const tempStr = JSON.stringify(playersList);
            localStorage.setItem('players', tempStr);
            history.push('/words');
        }

        const [playersList, setPlayers] = useState(tempPlayers);

        return (
            <Wrapper>
                <Label text="Стадия выбора" />
                <div className="players-list">
                    {
                        tempAnswers.map(p => {
                            const player = playersList.find(player => player.id === p.id);
                            return (
                                <Player 
                                    // customclass={checkText(p.id) ? 'player_background_green' : ''} 
                                    key={p.id} 
                                    userId={p.id} 
                                    name={p.text} 
                                    onClick={gameFinished ? () => {} : handlePlayerClick}
                                >
                                    {gameFinished ? <div className="player__score">{player.score}</div> : null}
                                </Player>
                            )
                        })
                    }
                </div>
                <CustomButton 
                    customClass={`players-list__continue background_green size_md color_white
                    ${gameFinished ? '' : ' custom-button_disabled'}
                    `} 
                    text="Следующий круг" 
                    onClick={handleSubmit} 
                    disabled={gameFinished ? false : true}
                />
            </Wrapper>
        )
    } else {
        return ( <h1>Произошла ошибка</h1>)
    }
}