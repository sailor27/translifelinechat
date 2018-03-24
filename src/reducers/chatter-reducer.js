import types from './../constants';
import {defaultState} from './../defaultState';

export default (state =
defaultState.chatterInfo, action) => {
	let newChatter;
	let newState;
	const {avatar, name, location} = action;
	switch (action.type) {
		case types.ADD_CHATTER:

		newChatter = Object.assign({}, state.chatterInfo, {avatar: avatar, name: name, location: location});

		newState = Object.assign({}, state, newChatter);

		return newState;

		default:
			return state;

	}
};
