import React from 'react';
import Option from './Option';

const OptionList = (props) => {
    const options = props.options
    return(
            <div>
                <button onClick={props.handleDeleteOptions}> Remove all</button>
                { options.map((option) => <Option key={option} content={option} />) }
            </div >
        )
}

export default OptionList;