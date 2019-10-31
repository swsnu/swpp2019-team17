import axios from 'axios';

// actions
const SIGN_UP_TUTOR = 'SIGN_UP_TUTOR';
const SIGN_UP_TUTEE = 'SIGN_UP_TUTEE';

// action creators
export const signUpTutor = (tutor) => (dispatch) => axios.post('/api/signup/tutor/', tutor);

export const signUpTutee = (tutee) => (dispatch) => axios.post('/api/signup/tutee/', tutee);

// reducer
export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
