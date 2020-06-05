import { FETCH_TODOS, ADD_TODO } from "../actions/actionType";

var initialStateTodo = [];

const todos = (state = initialStateTodo, action) => {
  console.log("voooooooo", action);
  var index = -1;
  var { id, todo } = action;
  switch (action.type) {
    case FETCH_TODOS:
      state = action.todos;
      return state;
    case ADD_TODO:
      state.push(action.todo);
      return [...state];
    default:
      break;
  }
};

export default todos;
