import React from 'react';
import {
  Route, Redirect, Switch,
} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import './App.css';

import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import SignUpTutor from '../SignUp/SignUpTutor';
import SignUpTutee from '../SignUp/SignUpTutee';
import Match from '../Match/Match';
import ProfileTutor from '../Profile/ProfileTutor';
import Certificate from '../Certificate/Certificate';
import TimeTable from '../TimeTable/TimeTable';

function App(props) {
  return (
    <ConnectedRouter history={props.history}>
      <div className="app">
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/signup/tutor" exact component={SignUpTutor} />
          <Route path="/signup/tutee" exact component={SignUpTutee} />
          <Route path="/tutee/match" exact component={Match} />
          <Route path="/profile/tutor" exact component={ProfileTutor} />
          <Route path="/cert" exact component={Certificate} />
          <Route path="/timetable" exact component={TimeTable} />
          <Redirect from="/" to="/login" />
        </Switch>
      </div>
    </ConnectedRouter>
  );
}

export default App;
