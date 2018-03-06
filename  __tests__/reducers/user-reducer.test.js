import userReducer from './../../src/reducers/user-reducer';
import {defaultState} from './../../src/defaultState';
import types from './../../src/constants';

describe('userReducer', () => {

  test('Should return default state if no action is recognized', () => {
    expect(userReducer(defaultState, { type: null })).toEqual(defaultState);
  });

  test('Should change state isConnected to equal true', () => {
    expect(userReducer(defaultState.user, {type: types.CONNECT_USER})).toEqual({
      user: {
        id: 'anon-345342',
        isOperator: false,
        isConnected: true,
      }
    });
  });

});
