import React, { Component } from "react";
import { toggleTodo } from "../actions";

class Todo extends Component {
  onDelete = () => {
    const { todo, deleteTodo } = this.props;
    deleteTodo(todo.id);
  };

  onCompleted = () => {
    const { todo, toggleTodo } = this.props;
    toggleTodo(todo.id);
  };

  render() {
    // console.log("toto1233", this.props.todo);
    return (
      <li className={this.props.todo.isComplete ? "todo-list" : " "}>
        {this.props.todo.todo}
        <button
          className="btn btn-danger"
          type="button"
          onClick={this.onDelete}
        >
          Remove
        </button>
        <button type="button" onClick={this.onCompleted}>
          Completed
        </button>
        <button type="button" onClick={this.onCompleted}>
          Edit
        </button>
      </li>
    );
  }
}

export default Todo;
