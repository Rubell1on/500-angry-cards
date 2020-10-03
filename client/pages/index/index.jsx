import React from 'react';
import './index.css';

import Wrapper from '../../components/wrapper/wrapper.jsx';
import { Link } from 'react-router-dom';

const Index = function() {

    return (
        <Wrapper customClass="index__wrapper">
            <div className="index__logo">
                <div className="logo__number">500</div>
                <div className="logo__text">злобных карт</div>
                <div className="logo__info">Клиент для записи своих<br/> безумных вариантов ответов</div>
            </div>
            <Link 
                className="index__start-button" 
                style={{display: 'block', textDecoration: 'none'}} 
                to={"/players"}
            >Начать</Link>
        </Wrapper>
    )
}

export default Index;