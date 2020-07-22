import React from 'react';
import AddOption from './AddOption';
import OptionList from './OptionList';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{
    state = {
        options: [],
        selectedOption: undefined
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
        this.setState( (prevState) => {
            return{
                selectedOption: randomOption
            }
        });
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

    removeItemOnce = (arr, value)  => {
        var index = arr.indexOf(value);
        if (index > -1) {
            arr.splice(index, 1);
        }
        return arr;
    }

    handleDeleteOption = (optionText) => {
        this.setState( (prevState) => {
            return {
                options: this.removeItemOnce(prevState.options, optionText)
            };
        });
    }

    clearSelectedOption = () => {
        this.setState( () =>{
            return {
                selectedOption: undefined
            };
        });
    }

    render(){
        const appTitle = 'Indecision';
        const subTitle = 'Put your life in the hands of a Computer';

        return(
            <div>
                <Header title={appTitle} subtitle={subTitle}/>
                <div className='container'>
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handleOptionPick={this.handleOptionPick}
                    />
                    <div className='widget'>
                        <OptionList 
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal 
                        selectedOption={this.state.selectedOption} 
                        clearSelectedOption={this.clearSelectedOption}
                    />
            </div>
        )
    }
}
