import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import addressReducer from './address';

export const history = createBrowserHistory();

export const rootReducer = combineReducers({
  adr: addressReducer,
  router: connectRouter(history),
});

export default rootReducer;
