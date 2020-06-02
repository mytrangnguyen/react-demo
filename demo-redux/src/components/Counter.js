import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  
  addOne = () => {
    this.props.addOne();
  };

  minusOne = () => {
    this.props.minusOne();
  };

  resetCount = () =>{
    this.props.resetCount();
  }

  render() {
    return (
      <div className="container">
        <h1>{this.props.number}</h1>
        <div className="counter-class">
          <button type="button" className="minus" onClick={this.minusOne}>
            -
          </button>
          <button type="button" className="plus" onClick={this.addOne}>
            +
          </button>
          <button type="button" className="reset" onClick={this.resetCount}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state here', state);
  return {
    number: state.number
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addOne: () => dispatch({ type: "ADD_ONE" }),
    minusOne: () => dispatch({ type: "MINUS_ONE" }),
    resetCount: () => dispatch({type: "RESET"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
