import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import store from "./store";
import { Provider } from "react-redux";
// import History from "./components/History";
import AddTodo from "./containers/AddTodo";
// import TodoList from "./containers/TodoList";
import VisibleTodoList from "./containers/VisibleTodoList";

function App() {
  return (
    <Provider store={store}>
      {/* <Counter />
        <History /> */}
      <AddTodo />
      <VisibleTodoList />
    </Provider>
  );
}

export default App;
