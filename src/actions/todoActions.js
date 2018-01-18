export const typingTodo = (todoText) => {
  return (dispatch) => {
    dispatch({
      type: "TYPING_TODO",
      payload: todoText
    });
  }
}
