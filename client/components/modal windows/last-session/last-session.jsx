import React from 'react';

import CustomWindow from '../../custom-window/custom-window.jsx';
import Label from '../../label/label.jsx';
import CustomButton from '../../custom-button/custom-button.jsx';

import './last-session.css';

export default function LastSession({onYes, onNo}) {
    return (
        <CustomWindow className="last-session">
            <Label className="last-session__header" text="Внимание!"/>
            <div className="last-session__description">Была найдена предыдущая сессия игры! Начать новую?</div>
            <div className="last-session__controls">
                <CustomButton customclass="size_sm" onClick={onYes} text="Да"/>
                <CustomButton customclass="size_sm" onClick={onNo} text="Нет"/>
            </div>
        </CustomWindow>
    )
}