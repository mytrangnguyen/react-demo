import { ADD_ONE, MINUS_ONE, RESET } from "../actions/counterAction";

const initialState = { //object
  number: 0,
  history: []
};

function handleChange(state, change) {
  const {number, history} = state;
  return ({
    number: number + change,
    history: [number + change, ...history]
  })
}

const reducerCounter = (state = initialState, action) => {// save in store
  switch (action.type) {
    case ADD_ONE: {
      return handleChange(state, +1)
        // number: state.number + 1
      
    }
    case MINUS_ONE: {
      return handleChange(state, -1)
        // number: state.number - 1
      
    }
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default reducerCounter;