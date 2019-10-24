import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

// for redux
import { connect } from 'react-redux';
//import * as actionCreators from './store/actions/index';

// import for modules
import Login from './containers/Login/Login';

function App(props) {
    return (
        <BrowserRouter>
        <div className="App">
            <Switch>
                <Route path='/login' exact render={() => <Login />} />
            </Switch>
        </div>
        </BrowserRouter>
    )
}

export default App;
