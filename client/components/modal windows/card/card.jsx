import React, {useState} from 'react';
import CustomInput from '../../custom-input/custom-input.jsx';
import CustomButton from '../../custom-button/custom-button.jsx';

import './card.css';

export default function Card({name = '', onClose = () => {}, onSubmit = () => {}}) {
    const [inputText, setInputText] = useState('');

    function handleInput(e) {
        const text = e.target.value;
        setInputText(text);
    }
    function handleSubmit(e) {
        onSubmit(e, inputText);
    }

    return (
        <div className="card">
            <div className="card__header">
                <div className="card__name">{name}</div>
                <div className="card__close" onClick={onClose}>+</div>
            </div>
            <form className="card__form" action="" onSubmit={handleSubmit}>
                <label htmlFor="player-text">Введите текст</label>
                <CustomInput id="player-text" customclass="card__input custom-input_width_100perc" onChange={handleInput} required/>
                <CustomButton customclass="card__submit background_green color_white size_md" type="submit"/>
            </form>
        </div>
    )
}