import axios from 'axios';

// actions
const SIGN_UP_TUTOR = 'SIGN_UP_TUTOR';
const SIGN_UP_TUTEE = 'SIGN_UP_TUTEE';

// action creators
export const signUpTutor = (tutor) => axios.post('/signup/tutor/', tutor)
  // (dispatch) => axios.post('/signup/tutor/', tutor)
  //   .then(res => console.log(res.data))

export const signUpTutee = (tutee) => (dispatch) => axios.post('/signup/tutee/', tutee);

// reducer
const InitialState = {
}

export const reducer = (state = InitialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};

export default reducer;
