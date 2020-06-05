import React, { Component } from "react";

class TodoForm extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <span className="navbar-brand">ToDo List</span>
            </div>
          </div>
        </nav>

        <form>
          <div className="form-group row">
            <div className="col-md-8 col-xs-8 col-lg-8 col-sm-8">
              <label htmlFor="">Task</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter task"
              />
            </div>
            <div className="col-md-4 col-xs-4 col-lg-4 col-sm-4 buttonAdd">
              <button
                type="submit"
                className="btn btn-primary"
              >
                Add task
              </button>
            </div>
          </div>
        </form>
        {/* <div>
          <button className="btn btn-info">All Tasks</button>
          &nbsp;
          <button className="btn btn-danger">Completed Task</button>
          &nbsp;
          <button className="btn btn-success">Active Task</button>
          &nbsp;
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped bg-success"
              id="myBar"
              role="progressbar"
              //   style={{ width: calPercent + "% " }}
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default TodoForm;
