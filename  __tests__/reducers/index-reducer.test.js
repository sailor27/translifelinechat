import rootReducer from './../../src/reducers/index';
import userReducer from './../../src/reducers/user-reducer';
import operatorReducer from './../../src/reducers/operator-reducer';
import sessionReducer from './../../src/reducers/session-reducer';
import { createStore } from 'redux';

let store = createStore(rootReducer);

describe('rootReducer', () => {

  test('Should return default state if no action is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      user: {
        id: null,
        isOperator: false,
        isConnected: false,
      },
      operatorInfo: {
        id: null,
        avatar: null,
        name: null,
        location: null,
      },
      session: {
        id: null,
        timeRequested: null,
        timeStarted: null,
        timeClosed: null,
        operatorId: null,
        messages: [
        ],
        notes: ''
      }
    });
  });



});
