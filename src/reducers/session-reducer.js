// import types from './../constants';
import constants from './../constants';
import {defaultState} from './../defaultState';
import moment from 'moment';
let newMessage;
let messages;
let newNotes;
let newState;
let newStartTime;
let newEndTime;

const {firebaseConfig, types} = constants;

export default (state = defaultState.session, action) => {
    const { timeStamp, isOp, string, notes } = action;
    newMessage = {
        timeStamp: timeStamp,
        isOp: isOp,
        string: string
    };
  switch (action.type) {
        case types.ADD_MESSAGE:
          messages = state.messages.slice();
          messages.push(newMessage);
          newState = Object.assign({}, state, {
            messages: messages
          });

          return newState;
        case types.RECEIVE_MESSAGE:
        newState = Object.assign({}, state);
        newState[action.message.id] = action.message;
        
            return newState;

		case types.ADD_NOTES:
			newNotes = notes;
			newState = Object.assign({}, state, {notes: newNotes});
			return newState;

		case types.START_SESSION:
			newStartTime = moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a');
			newState = Object.assign({}, state, {timeStarted:newStartTime});
			return newState;

		case types.END_SESSION:
			newEndTime = moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a');
			newState = Object.assign({}, state, {timeClosed:newEndTime});
			return newState;

    default:
      return state;
  }
};
