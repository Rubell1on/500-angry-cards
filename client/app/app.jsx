import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import './app.css';

import Index from '../pages/index/index.jsx';
import Players from '../pages/players/players.jsx';
import Words from '../pages/words/words.jsx';
import Final from '../pages/final/final.jsx';
import Winner from '../pages/winnner/winner.jsx';
import Header from '../components/header/header.jsx';

const App = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path={'/info'} render={() => <h1>Hello info</h1>}/>
            <Route path={'/winner/:id'} component={Winner}/>
            <Route path={'/final'} component={Final}/>
            <Route path={'/words'} component={Words}/>
            <Route path={'/players'} component={Players}/>
            <Route path={'/'} component={Index}/>
        </Switch>
    </BrowserRouter>
)

const root = document.querySelector('.app');

ReactDOM.render(<App/>, root);