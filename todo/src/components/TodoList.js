import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class TodoList extends Component {
  state = {
    value: '',
    completed: false
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.value)
    this.setState({
      value: ''
    })
  }
  render() {
    return (
      <div>
        {this.props.todos.map(todo => (
          <h1>{todo}</h1>
        ))}
        <form onSubmit={this.addTodo}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.value}
            placeholder="Add New Todo"
          />
        </form>
        <button onClick={this.addTodo}>Add Todo</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, { addTodo })(TodoList)