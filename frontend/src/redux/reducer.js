import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router';
import addressReducer from './address'
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export const rootReducer = combineReducers({
  adr: addressReducer,
  router: connectRouter(history),
});

export default rootReducer