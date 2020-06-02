import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "./../actions/index";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Math.random(),
      todo: "",
      isComplete: false,
    };
  }

  handleChange = (event) => {
    let value = event.target.value;
    this.setState({
      id: Math.random(),
      todo: value,
      isComplete: false,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let todo = this.state;
    this.props.onSubmit(todo);
  };

  render() {
    return (
      <div className="panel-body">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="todo"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add todo
          </button>
        </form>
      </div>
    );
  }
}

var mapDispatchToProps = (dispatch, props) => {
  return {
    onSubmit: (todo) => {
      dispatch(addTodo(todo));
    },
  };
};

export default connect(null, mapDispatchToProps)(AddTodo);
