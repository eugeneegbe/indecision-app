import React from 'react';
import AddOption from './AddOption';
import OptionList from './OptionList';
import Action from './Action';
import Header from './Header';

export default class IndecisionApp extends React.Component{
    state = {
        options: []
    };

    handleDeleteOptions = () => {
        this.setState( () => {
            return {
                options: []
            }
        });
    };

    handleOptionPick = () => {
        const random = Math.floor(Math.random() * this.state.options.length)
        const randomOption = this.state.options[random]
        alert(randomOption)
    };

    handleAddOption = (option) =>{
        //check if option exists or option provided is empty
        if( this.state.options.indexOf(option) > -1 ){ //option already exists
            return 'This option already exists';
        } else if (!option) { //empty string was provided | no option provided
            return 'Please enter a valid option';
        }

        this.setState( (prevState) => {
            return{
                options: prevState.options.concat(option)
            };
        });
    };

    render(){
        const appTitle = 'Indecision';
        const subTitle = 'Put your life in the hands of a Computer';

        return(
            <div>
                <Header title={appTitle} subtitle={subTitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handleOptionPick={this.handleOptionPick}
                />
                <OptionList 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}
