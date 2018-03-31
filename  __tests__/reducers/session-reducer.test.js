import sessionReducer from './../../src/reducers/session-reducer';
import {defaultState} from './../../src/defaultState';
import types from './../../src/constants';
import moment from 'moment';


describe('sessionReducer', () => {

  test('Should return default state if no action is recognized', () => {
    expect(sessionReducer(defaultState.session, { type: null })).toEqual(defaultState.session);
  });

  test('Should add new message to message array', () => {
    let testMessage = {
      timeStamp: undefined,
      isOp: undefined,
      string: undefined
    };

    let testMessages = defaultState.session.messages.slice();
    testMessages.push(testMessage);

    let testState = Object.assign({}, defaultState.session, {messages:testMessages});
    expect(sessionReducer(defaultState.session, {type: types.ADD_MESSAGE})).toEqual(testState);
  });

	// test('Should add notes to session object', () => {
	// 	let testNotes = '';
	// 	let testState = Object.assign({}, defaultState.session, {notes: testNotes});
  //
	// 	expect(sessionReducer(defaultState.session, {type: types.ADD_NOTES})).toEqual(testState);
	// });

	test('Should update session start time when component mounts', () => {
		let testTime = moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a');
		let testState = Object.assign({}, defaultState.session, {timeStarted: testTime});

		expect(sessionReducer(defaultState.session, {type: types.START_SESSION})).toEqual(testState);
	})
	test('Should update sessionClosed when component unmounts', () => {
		let testTime = moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a');
		let testState = Object.assign({}, defaultState.session, {timeClosed: testTime});

		expect(sessionReducer(defaultState.session, {type: types.END_SESSION})).toEqual(testState);
	})

});
