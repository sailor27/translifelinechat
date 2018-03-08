import types from './../constants';
import {defaultState} from './../defaultState';
let newMessage;
let newMessages;
let newState;

export default (state = defaultState.session, action) => {
  switch (action.type) {
    case types.ADD_MESSAGE:
      newMessage = {
        timeStamp: 1520535520200,
        isOp: false,
        string: 'Hi'
      };

      newMessages = state.messages.slice();

      newMessages.push(newMessage);

      newState = Object.assign({}, state.messages, newMessages);
      return newState;

    default:
      return state;
  }
};
