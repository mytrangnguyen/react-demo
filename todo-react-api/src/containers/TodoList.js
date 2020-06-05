import React, { Component } from "react";
import Todo from "../components/Todo";

class TodoList extends Component {
  render() {
    var elements = this.props.todos.map((todo, index) => {
      return (
        <Todo
          // todo={todo}
          // key={index}
          // deleteTodo={this.props.deleteTodo}
          // toggleTodo={this.props.toggleTodo}
          // showAll={this.props.showAll}
          // showActive={this.props.showActive}
          // showCompleted={this.props.showCompleted}
        />
      );
    });

    return (
      <div className="panel-footer">
        {/* <button
          type="button"
          onClick={() => {
            this.props.setVisibleFilter("SHOW_ACTIVE");
          }}
        >
          Active
        </button>
        <button
          type="button"
          onClick={() => {
            this.props.setVisibleFilter("SHOW_COMPLETED");
          }}
        >
          Completed
        </button>
        <button
          type="button"
          onClick={() => {
            this.props.setVisibleFilter("SHOW_ALL");
          }}
        >
          All
        </button> */}
        <ul>{elements}</ul>
      </div>
    );
  }
}

export default TodoList;
