import React from 'react';

function TuteeChildListComponent(props) {
    return (
        <div>
            <p>{props.name}</p>
            <button onClick={props.onClickMatching}>Register Tutee</button>
            {/* 여기다가 아이가 받는 tutee list를 넣으면 될듯요!!*/}
        </div>
    )
}
export default TuteeChildListComponent;