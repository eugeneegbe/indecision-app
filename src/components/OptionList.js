import React from 'react';
import Option from './Option';

const OptionList = (props) => {
    const options = props.options
    return(
            <div>
                <div className='widget-header'>
                    <h3 className='widget-header__title'>Your Options</h3>
                    <button
                        className='button button--link'
                        onClick={props.handleDeleteOptions}>
                        Remove all
                    </button>
                </div>
                {props.options.length === 0 && <p className='widget-message'>
                    Please add an option to get started!</p>}
                    { options.map((option, index) =>
                    <Option key={option} content={option} count={index + 1}/>) }                
            </div >
        )
}

export default OptionList;