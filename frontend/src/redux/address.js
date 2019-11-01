import axios from 'axios';

// actions
const SEARCH_ADDRESS = 'SEARCH_ADDRESS';

// action creators
export const searchAddress = (keyword) => {
  return dispatch => {
    return axios.get('/address/' + keyword)
      .then(res => dispatch(searchAddress_(res.data)))
  }
}

export const searchAddress_ = (address) => {
  return {
    type: SEARCH_ADDRESS,
    address: address
  }
}

// reducer
const InitialState = {
  address: []
}

export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case SEARCH_ADDRESS:
      return { ...state, address: action.address }
    default:
      return state;
  }
};

export default reducer;