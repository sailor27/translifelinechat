import React from 'react';
import { connect } from 'react-redux';
import types from './../constants';

function OperatorButton(props) {

//refactor to fire on OperatorForm Submit
  function handleAddingOperator(){
    const { dispatch } = props;
    const action = {
      type: types.ADD_OPERATOR
    };
    dispatch(action);
  }

return(
  <div style={{marginTop: '100px'}}>
    <p style={{display:'inline'}}>Volunteer Operators: </p>
    <button className='lilb' onClick={handleAddingOperator}>go!</button>
  </div>
	);
}

export default connect()(OperatorButton);
