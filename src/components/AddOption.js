import React from 'react';

export default class AddOption extends React.Component{
    constructor(props){
        super(props);

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            feedback: undefined
        };
    }

    handleFormSubmit(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim() //call trim to eliminate unwanted spaces

        // since addOption listens to feedback we need to update it's state
        const feedback = this.props.handleAddOption(option);
        console.log(feedback)
        this.setState( () => {
            return {
                feedback: feedback
            }
        });
    }

    render(){
        return(
            <div>
                {this.state.feedback && <small>{this.state.feedback}</small>}
                <form onSubmit={this.handleFormSubmit}>
                    <input type='text' name='option'></input>
                    <button>Add option</button>
                </form>
            </div>
        )
    }
}