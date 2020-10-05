import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

import Wrapper from '../../components/wrapper/wrapper.jsx';
import LastSession from '../../components/modal windows/last-session/last-session.jsx';

import './index.css';

const Index = function() {
    const [isSessionStarted, setSessionStatus] = useState(false);
    const history = useHistory();

    function handleStart() {
        const playersData = localStorage.getItem('players');
        if (playersData) {
            setSessionStatus(true);
        } else {
            history.push('/players');
        }
    }

    function handleYes() {
        localStorage.removeItem('players');
        localStorage.removeItem('playerAnswers');
        history.push('/players');
    }

    function handleNo() {
        setSessionStatus(false);
    }

    return (
        <>
        {isSessionStarted ? <LastSession onYes={handleYes} onNo={handleNo}/> : null}
        <Wrapper customClass="index__wrapper">
            <div className="index__logo">
                <div className="logo__number">500</div>
                <div className="logo__text">злобных карт</div>
                <div className="logo__info">Клиент для записи своих<br/> безумных вариантов ответов</div>
            </div>
            <div className="index__start-button" onClick={handleStart}>Начать</div>
        </Wrapper>
        </>
    )
}

export default Index;