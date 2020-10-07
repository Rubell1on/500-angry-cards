import React from 'react';
import Wrapper from '../../components/wrapper/wrapper.jsx';
import Label from '../../components/label/label.jsx';

import './info.css';

const Info = () => (
    <Wrapper customclass="info">
        <Label customclass="info__header" text="Инфо"/>
        <div className="info__text">Веб-клиент для настолки "500 злобных карт".</div>
        <div className="info__copyright">©Eggsgames, 2020</div>
    </Wrapper>
)

export default Info;