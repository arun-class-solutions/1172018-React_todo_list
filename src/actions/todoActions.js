export const typingTodo = (todoText) => {
  return (dispatch) => {
    dispatch({
      type: "TYPING_TODO",
      payload: todoText
    });
  }
}

export const submitTodo = (todoText) => {
  return (dispatch) => {
    dispatch({
      type: "SUBMIT_TODO",
      payload: todoText
    });
  }
}
