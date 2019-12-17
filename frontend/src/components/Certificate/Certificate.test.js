import React from 'react';

import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { history } from '../../redux/reducer';
import Certificate from './Certificate';
import { ConnectedRouter } from 'connected-react-router';

import { shallow, mount } from 'enzyme';

import store from '../../redux/store';

import * as actionCreators from '../../redux/certificate';


describe ("SignUpTutee", () => {
    let certificateComponent;
    let stubCertificate = ["지리학과"];
    let spycertificateTutor;
    const fileContents = 'file contents';
    const file = new Blob([fileContents], {type : 'text/plain'});

    const spyHistory = jest.spyOn(history, 'push')
    .mockImplementation(path => {});

    beforeEach(() => {

        certificateComponent = 
            <Provider store = {store}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route path="/" exact render={() => <Certificate/>}/>
                    </Switch>
                </ConnectedRouter>
            </Provider>
            
        spycertificateTutor = jest.spyOn(actionCreators, 'certificateTutor')
            .mockImplementation((file) => {return (dispatch) => ({ocr: stubCertificate})});
    });
  
    afterEach(() => {
        jest.clearAllMocks();
        history.push('/');
    });

    it ('gets the certificate', () => {
        const component = mount(certificateComponent);

        const certificateButton = component.find('input').simulate('change', {target: {files: [file]}});

        let department = component.find('.department');

        expect(spycertificateTutor).toHaveBeenCalledTimes(1);
    });

});