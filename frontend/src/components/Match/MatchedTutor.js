import React from 'react';

function MatchedTutor(props) {
    return (
        <div className='matchedtutor'>
            <div className="information">
                <p>{props.name}</p>
                <p>{props.gender} | {props.subject}</p>
                <button>Review</button> <button onClick={()=> {alert("Your request has been sent to the tutor")}}>Request</button>
            </div>
            <div className="available">
                <p>{props.available[0]}</p>
                <p>{props.available[1]}</p>
            </div>
        </div>
    )
}
export default MatchedTutor;