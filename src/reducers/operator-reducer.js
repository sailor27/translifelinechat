import types from './../constants';
import {defaultState} from './../defaultState';

export default (state = defaultState, action) => {
  let newOperator;
  let newState;

  // const {id, avatar, name, location} = action; how to replace action with different info?

  switch (action.type) {
    case types.ADD_OPERATOR:

      newOperator = Object.assign({}, state.operatorInfo, {id: 'operator-7', avatar: 'http://bit.ly/2FrnQOw', name: 'Milhouse', location: 'Springfield, OR'});

      newState = Object.assign({}, state, {operatorInfo: newOperator});
      return newState;

    default:
      return state;
  }
};
