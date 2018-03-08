import React from 'react';
import { connect } from 'react-redux';
import types from './../constants';

function OperatorButton(props) {

// refactor to fire on OperatorForm Submit
  function handleAddingOperator(){
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
    <button onClick={handleAddingOperator} className='lilb' >go!</button>
  </div>
	);
}

export default connect()(OperatorButton);
