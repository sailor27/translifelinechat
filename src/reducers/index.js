import userReducer from './user-reducer';
import operatorReducer from './operator-reducer';
import sessionReducer from './session-reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  user: userReducer,
  operatorInfo: operatorReducer,
  session: sessionReducer
});

export default rootReducer;
