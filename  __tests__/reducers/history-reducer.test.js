import historyReducer from './../../src/reducers/session-reducer';
import {defaultState} from './../../src/defaultState';
import constants from './../../src/constants';
const {firebaseConfig, types} = constants;
let testSession = {
    id: null,
    timeRequested: null,
    timeStarted: null,
    timeClosed: null,
    operatorId: null,
    messages: [
      {
        timeStamp: 1520535520208,
        isOp: false,
        string: 'this is a message'
      },
      {
        timeStamp: Date.now(),
        isOp: true,
        string: 'this is a message'
      }
    ],
    notes: ''
  };
describe('historyReducer', () => {

	test('Should return default state if no action is recognized', () => {
		expect(historyReducer(defaultState.history, { type: null })).toEqual(defaultState.history);
	});

	test('Should add session to history array', () => {
		let testHistory = defaultState.history.slice();
		testHistory.push(testSession);

		let testState = Object.assign({}, defaultState.history, testHistory);

		expect(historyReducer(defaultState.history, {type: types.ADD_SESSION})).toEqual(testState);
	});

});
