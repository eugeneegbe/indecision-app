import React from 'react';
import Option from './Option';

const OptionList = (props) => {
    const options = props.options
    return(
            <div>
                <div className='widget-header'>
                    <h3 className='widget-header__title'>Your Options</h3>
                    <button className='button button--link'
                    onClick={props.handleDeleteOptions}>
                        Remove all
                    </button>
                </div>
                { options.map((option) => <Option key={option} content={option} />) }
            </div >
        )
}

export default OptionList;