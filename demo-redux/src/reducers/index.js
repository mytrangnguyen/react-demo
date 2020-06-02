import { combineReducers } from "redux";
import todos from "./todo";
import visibilityFilter from "./visibilityFilter";

const myReducers = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter,
});

export default myReducers;

// state = {
//   todos:[
//     { id: "1", isComplete: true, todo: "task1" },
//     { id: "2", isComplete: false, todo: "task2" },
//     { id: "3", isComplete: false, todo: "task3" },
//     { id: "4", isComplete: true, todo: "task34" },
//   ],
//   visibilityFilter:  'SHOW_ALL'
// }
