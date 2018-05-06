// import types from './../constants';
import constants from './../constants';
import {defaultState} from './../defaultState';


const {firebaseConfig, types} = constants;

export default (state = defaultState.history, action) => {

	const {id, timeRequested, timeStarted, timeClosed, operatorId, notes} = action;

    let history;
    let newSession;

    newSession = {
        id: id,
        timeRequested: timeRequested,
        timeStarted: timeStarted,
        timeClosed: timeClosed,
        operatorId: operatorId,
        notes: notes
    };

		switch (action.type) {

			case types.ADD_SESSION:
            console.log(history);
				history = state.slice();
				history.push(newSession);

			return history;

			default:
				return state;
		}


	};
