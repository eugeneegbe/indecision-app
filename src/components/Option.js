import React from 'react';

// stateless functional based component as it does not manage state
const Option = (props) => {
    return (
        <div className='option'>
            <p className='option__text'>{props.count}. {props.content}</p>
            <button onClick={() => {props.handleDeleteOption(props.content)}}
                    className='button button--link'>remove</button>
        </div>
    )
}

export default Option