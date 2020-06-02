export const listTodo = () => {
  return {
    type: "LIST_TODO",
  };
};

export const addTodo = (todo) => {
  return {
    type: "ADD_TODO",
    todo,
    isCompleted: false,
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    id,
  };
};

export const toggleTodo = (id) => {
  return {
    type: "TOGGLE_TODO",
    id,
  };
};

export const editTodo = (id) => {
  return {
    type: "EDIT_TODO",
    id,
  };
};

export const showAll = () => {
  return {
    type: "SHOW_ALL",
  };
};

export const showCompleted = () => {
  return {
    type: "COMPLETED",
  };
};

export const showActive = () => {
  return {
    type: "ACTIVE",
  };
};

export const setVisibleFilter = (filter) => {
  return {
    type: "SET_VISIBLE_FILTER",
    filter,
  };
};

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};
