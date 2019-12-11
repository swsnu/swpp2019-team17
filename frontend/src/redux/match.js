import axios from 'axios';

const GET_TUTOR = "GET_TUTOR";

// create action
export const getTutor_ = (tutors) => ({
    type: GET_TUTOR,
    tutors: tutors
})

export const getTutor = (gender, subject) => (dispatch) => {
    axios.post('/', {gender: gender, subject: subject})
        .then((res) => dispatch(getTutor_(res.data)));
}

// reducer
const InitialState = {
    tutors: []
}

export const reducer = (state = InitialState, action) => {
    switch(action.type) {
        case GET_TUTOR:
            return { ...state, tutors: action.tutors};
        default:
            return state;
    }
}

export default reducer;