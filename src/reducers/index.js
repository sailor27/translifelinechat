import userReducer from './user-reducer';
import operatorReducer from './operator-reducer';
import sessionReducer from './session-reducer';
import chatterReducer from './chatter-reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  user: userReducer,
  operatorInfo: operatorReducer,
  chatterInfo: chatterReducer,
  session: sessionReducer
});

export default rootReducer;
