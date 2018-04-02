import rootReducer from './../../src/reducers/index';
import userReducer from './../../src/reducers/user-reducer';
import operatorReducer from './../../src/reducers/operator-reducer';
import sessionReducer from './../../src/reducers/session-reducer';
import historyReducer from './../../src/reducers/history-reducer';
import { createStore } from 'redux';
import { defaultState } from './../../src/defaultState';

let store = createStore(rootReducer);

describe('rootReducer', () => {

  test('Should return default state if no action is recognized', () => {
    expect(rootReducer(defaultState, { type: null })).toEqual(defaultState);
  });
'';


});
