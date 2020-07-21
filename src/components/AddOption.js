import React from 'react';

export default class AddOption extends React.Component{
    state = {
        feedback: undefined
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim() //call trim to eliminate unwanted spaces

        // since addOption listens to feedback we need to update it's state
        const feedback = this.props.handleAddOption(option);
        this.setState( () => {
            return {
                feedback: feedback
            }
        });
    }

    render(){
        return(
            <div>
                {this.state.feedback && <p className='add-option-error'>{this.state.feedback}</p>}
                <form className='add-option' onSubmit={this.handleFormSubmit}>
                    <input className='add-option-input' type='text' name='option'></input>
                    <button className='button'>Add option</button>
                </form>
            </div>
        )
    }
}