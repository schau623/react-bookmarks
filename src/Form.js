import React, {Component} from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        
        this.initialState = {
            name: '',
            link: ''
        };

        this.state = this.initialState;
    }

    handleChange = (event) => { //allows user to add new data
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => { //updates form with new values
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);

        //save data to local storage
        const json = JSON.stringify(this.state);
        localStorage.setItem(this.state.name, json);
    }

    render() {
        const { name, link } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <label for="name">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    value={name} 
                    onChange={this.handleChange} />
                <label for="link">Link</label>
                <input 
                    type="text" 
                    name="link" 
                    id="link"
                    value={link} 
                    onChange={this.handleChange} />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;