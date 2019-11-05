import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import addressReducer from './address';
import loginReducer from './login';
import signupReducer from './signup';

export const history = createBrowserHistory();

export const rootReducer = combineReducers({
  adr: addressReducer,
  log: loginReducer,
  router: connectRouter(history),
});

export default rootReducer;
