import operatorReducer from './../../src/reducers/operator-reducer';
import {defaultState} from './../../src/defaultState';
import constants from './../../src/constants';
const {firebaseConfig, types} = constants;

describe('operatorReducer', () => {

  test('Should return default state if no action is recognized', () => {
    expect(operatorReducer(defaultState, { type: null })).toEqual(defaultState);
  });

  test('Should add operator info and update state', () => {
    let testOperator = Object.assign({}, defaultState.operatorInfo, {id: undefined, avatar: undefined, name: undefined, location: undefined});

    let testState = Object.assign({}, defaultState, testOperator);
    expect(operatorReducer(defaultState, {type: types.ADD_OPERATOR})).toEqual(testState);
  });

});
