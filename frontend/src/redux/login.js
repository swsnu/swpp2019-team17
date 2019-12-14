import axios from 'axios';

const IS_LOGGED = 'IS_LOGGED';
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

// action creators
export const login_ = (data) => {
  return ({
    type: LOG_IN,
  })
}

export const login = (login_info) => 
    axios.post('/api/signin/', login_info)
    // .then(res => dispatch(login_(res.data)))


export const logout_ = () => ({
  type: LOG_OUT
})

export const logout = () => (dispatch) => {
  axios.get('/signout/')
    .then((res) => dispatch(logout_()));
}

// reducer
const InitialState = {
  session: null
};

export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...state, };
    case LOG_OUT:
      return state;
    default:
      return state;
  }
};

export default reducer;