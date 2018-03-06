import {defaultState} from '../defaultState';
import types from './../constants';

export default (state = defaultState, action) => {
  let newState;

  switch (action.type) {
    case types.CONNECT_USER:
    newState = Object.assign({}, state.user, {
      user: {
        id: 'anon-345342',
        isOperator: false,
        isConnected: true,
      }
    });
    return newState;

    default:
      return state;

  }
};
