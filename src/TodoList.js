import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { typingTodo, submitTodo } from "./actions/todoActions";

class TodoList extends Component {
  constructor() {
    super();

    // this.state = {
    //   todos: [],
    //   currentTodo: ""
    // }
  }

  handleChange(event) {
    // this.setState({
    //   currentTodo: event.target.value
    // });
    this.props.typingTodo(event.target.value);
  }

  handleClick() {
    // this.setState({
    //   todos: this.state.todos.concat(this.state.currentTodo),
    //   currentTodo: ""
    // });
    this.props.submitTodo(this.props.todos.currentTodo);
  }

  render() {
    return (
      <div>
        <div className="small-container well">
        	<div className="bold">
        		What do you want to do today?
        	</div>

        	<div className="margin-top-20">
        		<input onChange={this.handleChange.bind(this)} name="todoText" type="text" className="form-control" placeholder="Your todo..." value={this.props.todos.currentTodo} />
        	</div>

        	<div className="margin-top-20">
        		<button onClick={this.handleClick.bind(this)} type="button" id="submit-todo" className="btn btn-primary">Submit Todo</button>
        	</div>
        </div>

        <div id="todo-list" className="small-container">
        	<ol>
            { this.props.todos.todos.map((todo, index) => {
              return (
        		    <li key={index}>{todo} <a href="#">Done</a></li>
              )
            }) }
        	</ol>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    typingTodo: bindActionCreators(typingTodo, dispatch),
    submitTodo: bindActionCreators(submitTodo, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
