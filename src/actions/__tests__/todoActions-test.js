import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { typingTodo, submitTodo } from "../todoActions";

const mockStore = configureMockStore([thunk]);

describe("Todo Actions", () => {

  it("Should create TYPING_TODO action", () => {
    const store = mockStore();

    store.dispatch(typingTodo("My Todo"));

    expect(store.getActions())
    .toEqual([{ type: "TYPING_TODO", payload: "My Todo" }]);
  });

  it("Should create SUBMIT_TODO action", () => {
    const store = mockStore();

    store.dispatch(submitTodo("My Todo"));

    expect(store.getActions())
    .toEqual([{ type: "SUBMIT_TODO", payload: "My Todo" }]);
  });

});
