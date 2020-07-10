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
        this.setState( (prevState) => {
            return{
                options: prevState.options.concat(option)
            }
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

class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    };
}

class Action extends React.Component{

    render(){
        return (
            <div>
                
                <button
                    onClick={this.props.handleOptionPick}
                    disabled={!this.props.hasOptions}
                > What should I do?
                </button>
            </div>
        )
    };
}

class OptionList extends React.Component{
    render(){
        const options = this.props.options
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}> Remove all</button>
                { options.map( (option) => <Option key={option} content={option} />) }
            </div>
        )
    };
}

class AddOption extends React.Component{
    constructor(props){
        super(props);

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim() //call trim to eliminate unwanted spaces

        if (option) {
            this.props.handleAddOption(option)
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <input type='text' name='option'></input>
                    <button>Add option</button>
                </form>
            </div>
        )
    }
}

class Option extends React.Component{
    render(){
        return (
            <div>
                <p>{this.props.content}</p>
            </div>
        )
    }
}

const jsx = (
    <div>
        <IndecisionApp />
    </div>
)


ReactDOM.render(jsx, document.getElementById('app'))