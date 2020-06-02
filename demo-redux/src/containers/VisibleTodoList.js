import { connect } from "react-redux";
// import { toggleTodo } from '../actions'
import TodoList from "../containers/TodoList";
import {
  VisibilityFilters,
  deleteTodo,
  toggleTodo,
  setVisibleFilter,
} from "../actions";

const getVisibleTodos = (todos, filter) => {
  console.log("filter", filter);
  console.log("todos", todos);

  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((todo) => todo.isComplete);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((todo) => !todo.isComplete);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = (state) => {
  console.log("state", state);

  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
  };
};

const mapDispatch = (dispatch) => ({
  deleteTodo: (id) => dispatch(deleteTodo(id)),
  toggleTodo: (id) => dispatch(toggleTodo(id)),
  setVisibleFilter: (filter) => dispatch(setVisibleFilter(filter)),
});

export default connect(mapStateToProps, mapDispatch)(TodoList);
