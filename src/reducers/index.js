import userReducer from './user-reducer';
import operatorReducer from './operator-reducer';
import sessionReducer from './session-reducer';
import chatterReducer from './chatter-reducer';
import historyReducer from './history-reducer';
import {combineReducers} from 'redux';
import types from './../constants';
import {defaultState} from './../defaultState';

const appReducer = combineReducers({
  user: userReducer,
  operatorInfo: operatorReducer,
  chatterInfo: chatterReducer,
  session: sessionReducer,
	history: historyReducer
});

const rootReducer = (state,action) => {
	if(action.type === 'DISCONNECT_USER'){
		state = defaultState;
		console.log(state);
	}
	return appReducer(state, action);
};



export default rootReducer;
