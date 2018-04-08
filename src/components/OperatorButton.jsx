import React from 'react';
import { connect } from 'react-redux';
// import types from './../constants';
import constants from './../constants';
const {firebaseConfig, types} = constants;

function OperatorButton(props) {

  function handleSwitchingUser(){
		console.log('time to change the state ⌚️');
    const { dispatch } = props;
    const action = {
      type: types.SWITCH_USER
    };
    dispatch(action);
  }

return(
  <div style={{marginTop: '100px'}}>
    <p style={{display:'inline'}}>Volunteer Operators: </p>
    <button onClick={handleSwitchingUser} className='lilb' >go!</button>
  </div>
	);
}

export default connect()(OperatorButton);
