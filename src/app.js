class IndecisionApp extends React.Component{
    constructor(props){
        super(props);

        // bind all class actions to the current instance
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleOptionPick = this.handleOptionPick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            options: []
        };
    }

    handleDeleteOptions() {
        this.setState( () => {
            return {
                options: []
            }
        });
    }

    handleOptionPick(){
        const random = Math.floor(Math.random() * this.state.options.length)
        const randomOption = this.state.options[random]
        alert(randomOption)
    }

    handleAddOption(option){
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
    }

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

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}

const Action = (props) => {
    return(
            <div>
                <button
                    onClick={props.handleOptionPick}
                    disabled={!props.hasOptions}
                > What should I do?
                </button>
            </div >
        )
}

const OptionList = (props) => {
    const options = props.options
    return(
            <div>
                <button onClick={props.handleDeleteOptions}> Remove all</button>
                { options.map((option) => <Option key={option} content={option} />) }
            </div >
        )
}

class AddOption extends React.Component{
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

// stateless functional based component as it does not manage state
const Option = (props) => {
    return (
        <div>
            <p>{props.content}</p>
        </div>
    )
}

const jsx = (
    <div>
        <IndecisionApp />
    </div>
)


ReactDOM.render(jsx, document.getElementById('app'))