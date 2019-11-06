import React from 'react';

function MatchedTutor(props) {
    return (
        <div className='matchedtutor'>
            <p>{props.name}</p>
            <p>{props.gender} | {props.subject}</p>
            <button>Review</button> <button onClick={()=> {alert("Your request has been sent to the tutor")}}>Request</button>
        </div>
    )
}
export default MatchedTutor;