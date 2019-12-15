import React from 'react';

function TuteeChildListComponent(props) {
    return (
        <div>
            <p>{props.name}</p>
            <button onClick={props.onClickMatching}>Request tutor</button>
        </div>
    )
}
export default TuteeChildListComponent;