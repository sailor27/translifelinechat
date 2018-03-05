import React from 'react';
import PropTypes from 'prop-types';

function OperatorForm(props){

  const operatorFormStyle={
    maxWidth: '350px'
  };
  const avatarStyle = {
    height: '180px',
    width: '180px',
    color: 'white',
    borderRadius: '50%',
    backgroundColor: '#5074AB',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
  return(
    <div style={operatorFormStyle}>
      <h2>Operator Info:</h2>
      <div className='sCard'>

        <div style={avatarStyle}>
          <form>
            <input
              type='text'
              id='avatar'
              placeholder={props.operator.avatar}
              />
            <button className='lilb'>add</button>
          </form>
        </div>
        <form>
          <input
            type='text'
            id='name'
            placeholder={props.operator.name}
            />
          <button className='lilb'>add</button>
        </form>
        <form>
          <input
            type='text'
            id='location'
            placeholder={props.operator.location}
            />
          <button className='lilb'>add</button>
        </form>
        <h3>id: {props.operator.id}</h3>
      </div>

    </div>
  );
}

OperatorForm.propTypes = {
  operator: PropTypes.object
};
export default OperatorForm;
