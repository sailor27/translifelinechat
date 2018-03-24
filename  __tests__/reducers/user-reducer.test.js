import userReducer from './../../src/reducers/user-reducer';
import {defaultState} from './../../src/defaultState';
import types from './../../src/constants';

describe('userReducer', () => {

  test('Should return default state if no action is recognized', () => {
    expect(userReducer(defaultState, { type: null })).toEqual(defaultState);
  });

  test('Should change state isConnected to equal true', () => {
    let testUser = Object.assign({}, defaultState.user, {isConnected: true});
    let testState = Object.assign({}, defaultState, testUser);
    expect(userReducer(defaultState, {type: types.CONNECT_USER})).toEqual(testState);
  });

	test('Should change state isOperator to equal true', () => {
		let testUser = Object.assign({}, defaultState.user, {isOperator: true});
    let testState = Object.assign({}, defaultState, testUser);
    expect(userReducer(defaultState, {type: types.SWITCH_USER})).toEqual(testState);
	});

	test('Should change state isConnected to equal false', () => {
		let testUser = Object.assign({}, defaultState.user, {isConnected: false});
		let testState = Object.assign({}, defaultState, testUser);
    expect(userReducer(defaultState, {type: types.DISCONNECT_USER})).toEqual(testState);
	});


});
