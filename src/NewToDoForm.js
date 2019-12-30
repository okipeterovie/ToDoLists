import React, { Component } from 'react';
import uuid from 'uuid/v4';
import "./NewTodoForm.css";

class NewToDoForm extends Component {
    constructor(props){
        super(props);
        this.state = { task: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.createTodo({...this.state, id:uuid(), completed: false});
        this.setState({task:""})

    }

    render(){
    return (
        <form className= 'NewTodo-form' onSubmit={this.handleSubmit}>
            <label htmlFor= 'task'>New Todo</label>
            <input 
            type='text' 
            placeholder='New ToDo' 
            id='task' 
            name = 'task'
            value = {this.state.task}
            onChange={this.handleChange}
            />
            <button>
                Add
            </button>
        </form>
    );
    }
}

export default NewToDoForm;