import types from './../constants';
import {defaultState} from './../defaultState';

export default (state = defaultState, action) => {
  let newState;
  let newUser;
  switch (action.type) {
    case types.CONNECT_USER:
    newUser = Object.assign({}, state.user, {isConnected: true});

    newState = Object.assign({}, state, {user: newUser});
    return newState;

    default:
      return state;

  }
};
