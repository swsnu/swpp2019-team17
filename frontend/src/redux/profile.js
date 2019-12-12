import axios from 'axios';

// === === ACTION === ===

// === TUTEE MANAGER PROFILE PART ===
const GET_TUTEE_MANAGER = "GET_TUTEE_MANAGER";
const SEND_CHILD_ID = "SEND_CHILD_ID";

export const getTuteeManager_ = (tutee_manager) => ({
    type: GET_TUTEE_MANAGER,
    tutee_manager: tutee_manager,
    children: children
})

// should put backend address here in axios
export const getTuteeManager = () => (dispatch) => {
    axios.get('/')
        .then((res) => dispatch(getTuteeManager_(res.data)));
}

export const sendChildID = (id) => ({
    type: SEND_CHILD_ID,
    sentChildID: id
})


// === TUTOR PROFILE PART ===
const GET_TUTOR = "GET_TUTOR";

export const getTutor_ = (tutor) => ({
    type: GET_TUTOR,
    tutor: tutor
})

// should put backend address here in axios
export const getTutor = () => (dispatch) => {
    axios.get('/')
        .then((res) => dispatch(getTutor_(res.data)));
}


// === ===  reducer === ===
const initialState = {
    tutee_manager: null,
    children: [],
    tutor: null,
    sentChildID: null
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_TUTEE_MANAGER:
            return {...state, tutee_manager: action.tutee_manager, children: action.children};
        case SEND_CHILD_ID:
            return {...state, sentChildID: action.sentChildID};
        case GET_TUTOR:
            return {... state, tutor: action.tutor};
        default:
            return state;
    }
}
export default reducer;