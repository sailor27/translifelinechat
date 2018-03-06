import types from './../constants';
import {defaultState} from './../defaultState';

export default (state = defaultState.operator, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
