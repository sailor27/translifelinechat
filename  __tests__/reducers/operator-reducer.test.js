import operatorReducer from './../../src/reducers/operator-reducer';
import {defaultState} from './../../src/defaultState';
import types from './../../src/constants';

describe('operatorReducer', () => {

  test('Should return default state if no action is recognized', () => {
    expect(operatorReducer(defaultState, { type: null })).toEqual(defaultState);
  });

  test('Should add operator info and update state', () => {
    let testOperator = Object.assign({}, defaultState.operatorInfo, {id: 'operator-7', avatar: 'http://bit.ly/2FrnQOw', name: 'Milhouse', location: 'Springfield, OR'});

    let testState = Object.assign({}, defaultState, {operatorInfo: testOperator});
    expect(operatorReducer(defaultState, {type: types.ADD_OPERATOR})).toEqual(testState);
  });

});
