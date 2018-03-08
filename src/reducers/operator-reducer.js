import types from './../constants';
import {defaultState} from './../defaultState';

export default (state = defaultState.operatorInfo, action) => {
  let newOperator;
  let newState;

  switch (action.type) {
    case types.ADD_OPERATOR:

      newOperator = Object.assign({}, state.operatorInfo, {id: 'operator-7', avatar: 'http://bit.ly/2FrnQOw', name: 'Milhouse', location: 'Springfield, OR'});

      newState = Object.assign({}, state, {operatorInfo: newOperator});
      return newState;

    default:
      return state;
  }
};
