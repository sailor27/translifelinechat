import sessionReducer from './../../src/reducers/session-reducer';
import {defaultState} from './../../src/defaultState';
import types from './../../src/constants';

describe('sessionReducer', () => {

  test('Should return default state if no action is recognized', () => {
    expect(sessionReducer(defaultState.session, { type: null })).toEqual(defaultState.session);
  });

  test('Should add new message to message array', () => {
    let testMessage = {
      timeStamp: 1520535520200,
      isOp: false,
      string: 'Hi'
    };

    let testMessages = defaultState.session.messages.slice();
    testMessages.push(testMessage);

    let testState = Object.assign({}, defaultState.session.messages, testMessages);
    expect(sessionReducer(defaultState.session, {type: types.ADD_MESSAGE})).toEqual(testState);
  });

});
