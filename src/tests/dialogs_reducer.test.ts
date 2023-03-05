import { addMessageAC, dialogsReducer, updateNewMessageTextAC } from "../redux/dialogs_reducer";

test("should add correct message", () => {
  const startState = {
    messages: [
      { id: "1", message: "Hello" },
      { id: "2", message: "Whats up" },
      { id: "3", message: "What have you been up to?" },
      { id: "4", message: "I have been abroad" },
    ],
    dialogs: [
      { id: "1", name: "Katya" },
      { id: "2", name: "Marina" },
      { id: "3", name: "Denis" },
      { id: "4", name: "Liana" },
    ],
    newMessageText: "",
  };
  const endState = dialogsReducer(startState, addMessageAC());

  expect(endState.messages.length).toBe(5);
  expect(endState.messages[4].id).toBe("5");
});

test("should update new message text", () => {
  const startState = {
    messages: [
      { id: "1", message: "Hello" },
      { id: "2", message: "Whats up" },
      { id: "3", message: "What have you been up to?" },
      { id: "4", message: "I have been abroad" },
    ],
    dialogs: [
      { id: "1", name: "Katya" },
      { id: "2", name: "Marina" },
      { id: "3", name: "Denis" },
      { id: "4", name: "Liana" },
    ],
    newMessageText: "",
  };
  const endState = dialogsReducer(startState, updateNewMessageTextAC('some text'));

  expect(endState.newMessageText).toBe('some text');
});
