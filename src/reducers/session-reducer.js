import types from './../constants';
import {defaultState} from './../defaultState';
let newMessage;
let messages;
let newNotes;
let newState;

export default (state = defaultState.session, action) => {
	const { timeStamp, isOp, string, notes} = action;
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

		case types.ADD_NOTES:
			newNotes = notes;
			newState = Object.assign({}, state, {notes: newNotes});

			return newState;

    default:
      return state;
  }
};
