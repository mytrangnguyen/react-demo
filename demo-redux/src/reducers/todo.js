var initialState = [
  { id: "1", isComplete: true, todo: "task1" },
  { id: "2", isComplete: false, todo: "task2" },
  { id: "3", isComplete: false, todo: "task3" },
  { id: "4", isComplete: true, todo: "task34" },
];

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIST_TODO":
      return state;
    case "ADD_TODO":
      state.push(action.todo);
      return [...state];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, isComplete: !todo.isComplete } : todo
      );
   
    default:
      return state;
  }
};

export default myReducer;

