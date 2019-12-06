import axios from 'axios';

const CERTIFICATE_TUTOR = 'CERTIFICATE_TUTOR';


export const certificateTutor_ = (ocr) => {
    return {
        type: CERTIFICATE_TUTOR,
        ocr: ocr
    };
}

export const certificateTutor = (image) => {

    return dispatch => {
      return axios.post('/signup/tutor/certificate/', image)
        .then(res => {
            dispatch(certificateTutor_(res.data));
            console.log("this is response from kakao", res.data);
        })
    }
}

//reducer
const initialState = {
    ocr: null
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CERTIFICATE_TUTOR:
            return {
                ...state,
                ocr: action.ocr
            };
        default:
            return state;
    }
}

export default reducer;