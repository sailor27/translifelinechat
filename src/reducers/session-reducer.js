import types from './../constants';
import {defaultState} from './../defaultState';
let newMessage;
let messages;
let newState;

export default (state = defaultState.session, action) => {
	const { timeStamp, isOp, string} = action;
  switch (action.type) {
    case types.ADD_MESSAGE:
      newMessage = {
        timeStamp: timeStamp,
        isOp: isOp,
        string: string
      };

      messages = state.messages.slice();
      messages.push(newMessage);

      newState = Object.assign({}, state, {
        messages: messages
      });

      return newState;

    default:
      return state;
  }
};
