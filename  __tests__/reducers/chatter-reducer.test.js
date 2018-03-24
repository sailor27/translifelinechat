import chatterReducer from './../../src/reducers/chatter-reducer';
import {defaultState} from './../../src/defaultState';
import types from './../../src/constants';

	describe('chatterReducer', () => {

	test('Should return default state if no action is recognized', () => {
		expect(chatterReducer(defaultState, { type: null })).toEqual(defaultState);
	});

	test('Should add chatter info and update state', () => {
		let testChatter = Object.assign({}, defaultState.chatterInfo, {avatar:'test url', name: 'Jamie', location: 'Butte, MT'});

		let testState = Object.assign({}, defaultState, testChatter);
		expect(chatterReducer(defaultState, {type: types.ADD_CHATTER})).toEqual(testState);
	});

});
