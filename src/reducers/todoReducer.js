const initialState = {
  todos: [],
  currentTodo: ""
}

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case "TYPING_TODO": {
      return Object.assign({}, state, {
        currentTodo: action.payload
      });
    }

    default: {
      return state;
    }
  }
}

export default todoReducer;
