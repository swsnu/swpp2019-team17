import React from 'react';

const ChildItems = (props) => {
    return (
        <div className="Item">
            <p className="name">{props.name}</p>
            <p className="birthday">{props.birthday}</p>
        </div>
    )
}
export default ChildItems;