class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggle = this.handleToggle.bind(this);

        this.state = {
            visibility: false
        };
    }   

    handleToggle() {
        this.setState( (prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }

    render(){
        console.log(this.state.visibility)
        return(
            <div>
                
                <h5>Toggle Visibility</h5>
                <button onClick={this.handleToggle}>{ this.state.visibility ? 'hide details': 'show details'}</button>
                {this.state.visibility && <p>This is the hidden text here</p>}
            </div>
        )
    }
}

const jsx = (
    <div>
        <VisibilityToggle />
    </div>
)


ReactDOM.render(jsx, document.getElementById('app'))