import React from 'react';

import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { history } from '../../redux/reducer';
import SignUpTutee from './SignUpTutee';
import { ConnectedRouter } from 'connected-react-router';

import { shallow, mount } from 'enzyme';

import store from '../../redux/store';

import * as actionCreators from '../../redux/match';



describe ("SignUpTutee", () => {
    let signupComponent;
    //let stubMatchedTutors;
    let spygetTutor;

    const spyHistory = jest.spyOn(history, 'push')
    .mockImplementation(path => {});

    beforeEach(() => {

        signupComponent = 
            <Provider store = {store}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route path="/" exact render={() => <SignUpTutee/>}/>
                    </Switch>
                </ConnectedRouter>
            </Provider>

    });
  
    afterEach(() => {
        jest.clearAllMocks();
        history.push('/');
    });

    it ('should have null', () => {
        const component = mount(signupComponent);

        const newInstance = component.find(SignUpTutee.WrappedComponent).instance();

        expect(newInstance.state.id).toEqual("");
    });

});