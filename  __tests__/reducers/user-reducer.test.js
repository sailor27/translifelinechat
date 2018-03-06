import userReducer from './../../src/reducers/user-reducer';
import {defaultState} from './../../src/defaultState';

describe('userReducer', () => {

  test('Should return default state if no action is recognized', () => {
    expect(userReducer(defaultState, {type:null})).toEqual(defaultState);
  });


  test('Should change state isConnected to equal true when connect button is clicked by Chatter', () => {
    expect(userReducer(defaultState.user.isConnected, action)).toEqual(true);
    });

});
