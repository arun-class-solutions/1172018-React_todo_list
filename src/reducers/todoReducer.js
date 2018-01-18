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

    case "SUBMIT_TODO": {
      return Object.assign({}, state, {
        todos: state.todos.concat(action.payload),
        currentTodo: ""
      });
    }

    default: {
      return state;
    }
  }
}

export default todoReducer;
