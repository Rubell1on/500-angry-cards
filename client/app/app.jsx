import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './app.css';

import Index from '../pages/index/index.jsx';
import Players from '../pages/players/players.jsx';
import Words from '../pages/words/words.jsx';
import Final from '../pages/final/final.jsx';
import Winner from '../pages/winnner/winner.jsx';
import Header from '../components/header/header.jsx';
import Info from '../pages/info/info.jsx';

const App = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path={'/info'} component={Info}/>
            <Route exact path={'/winner/:id'} component={Winner}/>
            <Route exact path={'/final'} component={Final}/>
            <Route exact path={'/words'} component={Words}/>
            <Route exact path={'/players'} component={Players}/>
            <Route exact path={'/'} component={Index}/>
        </Switch>
    </BrowserRouter>
)

const root = document.querySelector('.app');

ReactDOM.render(<App/>, root);