import React from "react";

import {Link} from 'react-router-dom';

import './header.css';

const Header = () => (
    <div className="header">
        <Link className="header__link" to={'/'}>Главная</Link>
        <Link className="header__link" to={'/info'}>Инфо</Link>
    </div>
)

export default Header;