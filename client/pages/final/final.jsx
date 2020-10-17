import React, {useState} from 'react';

import Wrapper from '../../components/wrapper/wrapper.jsx';
import Label from '../../components/label/label.jsx';
import Player from '../../components/player/player.jsx';
import CustomButton from '../../components/custom-button/custom-button.jsx';
import { useHistory } from 'react-router-dom';

import './final.css';

export default function Final() {
    const [selected, setSelection] = useState(false);

    const playersString = localStorage.getItem('players');
    const answersString = localStorage.getItem('playerAnswers');
    const history = useHistory();

    if (playersString && answersString) {
        const tempPlayers = JSON.parse(playersString);
        const tempAnswers = shuffle(JSON.parse(answersString));

        function handlePlayerClick(id) {
            const ind = playersList.findIndex(p => p.id === id);
            playersList[ind].score+=1;
            if (playersList[ind].score > 10) {
                history.push(`/winner/${id}`);
            } else if (playersList[ind].score === 10) {
                const tempStr = JSON.stringify(playersList);
                localStorage.setItem('players', tempStr);
                history.push(`/winner/${id}`);
            }
            setPlayers([...playersList]);
            setSelection(true);
        }

        function handleSubmit() {
            const tempStr = JSON.stringify(playersList);
            localStorage.setItem('players', tempStr);
            history.push('/words');
        }

        function shuffle(arr) {
            if (Array.isArray(arr)) {
                let oldArr = [...arr];
                const temp = [];

                for (let i = 0; oldArr.length; i++) {
                    const ind = getRandomInt(oldArr.length);
                    const removed = oldArr.splice(ind, 1);
                    temp.push(...removed);
                }

                return temp;
            } else {
                return false;
            }

            function getRandomInt(max) {
                return Math.floor(Math.random() * Math.floor(max));
              }
        }

        const [playersList, setPlayers] = useState(tempPlayers);

        return (
            <Wrapper>
                <Label customclass="final__header" text="Выбор" />
                <div className="players-list">
                    {
                        tempAnswers.map(p => {
                            const player = playersList.find(player => player.id === p.id);
                            return (
                                <Player 
                                    // customclass={checkText(p.id) ? 'player_background_green' : ''} 
                                    customclass="player__height_fit"
                                    key={p.id} 
                                    userId={p.id} 
                                    name={selected ? '' : p.text} 
                                    onClick={selected ? () => {} : handlePlayerClick}
                                >
                                    {
                                    selected 
                                    ? <>
                                        <div className="player__name player__name_short player__name_height_fit player__text_bold">{player.name}</div>
                                        <div className="player__answer player__answer_short">{p.text}</div>
                                        <div className="player__score">{player.score}</div>
                                    </>
                                    : null}
                                </Player>
                            )
                        })
                    }
                </div>
                <CustomButton 
                    customclass={`players-list__continue background_green size_md color_white
                    ${selected ? '' : ' custom-button_disabled'}
                    `} 
                    text="Следующий круг" 
                    onClick={handleSubmit} 
                    disabled={selected ? false : true}
                />
            </Wrapper>
        )
    } else {
        return ( <h1>Произошла ошибка</h1>)
    }
}