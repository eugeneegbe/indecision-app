import React from 'react';

// stateless functional based component as it does not manage state
const Option = (props) => {
    return (
        <div>
            <p>{props.content} <button className='button button--link'>remove</button></p>
        </div>
    )
}

export default Option