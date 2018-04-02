import types from './../constants';
import {defaultState} from './../defaultState';
let history;
let newSession;
let newState;
export default (state = defaultState.history, action) => {

	const {id, timeRequested, timeStarted, timeClosed, operatorId, notes} = action;

		switch (action.type) {
			case types.ADD_SESSION:
				newSession = {
      		id: id,
					timeRequested: timeRequested,
			    timeStarted: timeStarted,
			    timeClosed: timeClosed,
			    operatorId: operatorId,
			    notes: notes,
				};

				history = state.slice();
				history.push(newSession);
				newState =  Object.assign({}, state, {
						history: history
				});

				return newState;
			default:
				return state;
		}


	};
