import types from './../constants';
import {defaultState} from './../defaultState';

export default (state = defaultState.user, action) => {
  let newState;
  let newUser;
  switch (action.type) {
    case types.CONNECT_USER:
	    newUser = Object.assign({}, state.user, {isConnected: true});
	    newState = Object.assign({}, state,  newUser);
    return newState;

    case types.DISCONNECT_USER:
	    newUser = Object.assign({}, state.user, {isConnected: false});
	    newState = Object.assign({}, state,  newUser);
    return newState;

		case types.SWITCH_USER:
			newUser = Object.assign({}, state.user, {isOperator: true});
	    newState = Object.assign({}, state,  newUser);
		return newState;

    default:
      return state;

  }
};
