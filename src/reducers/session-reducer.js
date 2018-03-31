import types from './../constants';
import {defaultState} from './../defaultState';
import moment from 'moment';
let newMessage;
let messages;
let newNotes;
let newState;
let newTime;

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

		case types.START_SESSION:
			newTime = moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a');
			newState = Object.assign({}, state, {timeStarted:newTime});
			return newState;
		case types.END_SESSION:
			newTime = moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a');
			newState = Object.assign({}, state, {timeClosed:newTime});
			return newState;

    default:
      return state;
  }
};
