import React, { Component } from "react";


class Todo extends Component {
 
  render() {
    // console.log("toto1233", this.props.todo);
    return (
      <li>
        <button
          className="btn btn-danger"
          type="button"
          onClick={this.onDelete}
        >
          Remove
        </button>
        <button type="button" onClick>
          Completed
        </button>
        <button type="button" onClick>
          Edit
        </button>
      </li>
    );
  }
}

export default Todo;
