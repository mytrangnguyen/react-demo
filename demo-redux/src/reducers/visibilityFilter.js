export default (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case "SET_VISIBLE_FILTER":
      console.log("vao show all", state);
      return action.filter;
    default:
      return state;
  }
};
