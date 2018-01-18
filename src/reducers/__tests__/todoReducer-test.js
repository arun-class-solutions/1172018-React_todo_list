import todoReducer from "../todoReducer";

describe("Todo Reducer", () => {

  it("TYPING_TODO", () => {
    const stateChange = todoReducer(undefined, {
      type: "TYPING_TODO",
      payload: "My Todo"
    });

    expect(stateChange)
    .toEqual(expect.objectContaining({
      currentTodo: "My Todo"
    }));
  });

  it("SUBMIT_TODO", () => {
    const stateChange = todoReducer(undefined, {
      type: "SUBMIT_TODO",
      payload: "My Todo"
    });

    expect(stateChange)
    .toEqual(expect.objectContaining({
      currentTodo: ""
    }));
  });

});
