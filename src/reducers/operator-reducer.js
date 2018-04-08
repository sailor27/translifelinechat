import {defaultState} from './../defaultState';
import constants from './../constants';

const {firebaseConfig, types} = constants;

export default (state = defaultState.operatorInfo, action) => {
  let newOperator;
  let newState;
	const { id, avatar, name, location} = action;

  switch (action.type) {
    case types.ADD_OPERATOR:

      newOperator = Object.assign({}, state.operatorInfo, {id: id, avatar: avatar, name: name, location: location});

      newState = Object.assign({}, state, newOperator);
      return newState;

    default:
      return state;
  }
};
