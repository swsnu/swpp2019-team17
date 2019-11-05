import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from '../../redux/store';
import { history } from '../../redux/reducer';
import { Provider } from 'react-redux';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App history={history} />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
