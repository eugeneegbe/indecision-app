import React from 'react';

// stateless functional based component as it does not manage state
const Option = (props) => {
    return (
        <div>
            <p>{props.content}</p>
        </div>
    )
}

export default Option