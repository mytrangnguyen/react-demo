import React, { Component } from "react";
import "./App.css";
import todos from "./reducers/todo";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import TodoForm from "./components/TodoForm";
import { createStore } from "redux";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware } from "redux"
import TodoList from "../containers/TodoList";

const store = createStore(
  todos,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoForm />
        <TodoList />
      </Provider>
    );
  }
}

export default App;
