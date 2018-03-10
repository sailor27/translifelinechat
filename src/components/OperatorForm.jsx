import React from 'react';
import PropTypes from 'prop-types';

function OperatorForm(props){
	console.log(props);
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
    alignItems: 'center',
		flexFlow: 'column nowrap'
  };
  return(
    <div>
      <h2>Operator Info</h2>
      <div className='sCard'>
        <form>
          <div style={avatarStyle}>
            <input
              type='text'
              id='avatar'
              placeholder={props.operator.avatar}
						/>
            <label>avatar url</label>
          </div>
          <div>
            <label>name</label>
            <input
              type='text'
              id='name'
              placeholder={props.operator.name}
						/>
          </div>
          <div>
            <label>location</label>
            <input
              type='text'
              id='location'
              placeholder={props.operator.location}
						/>
          </div>
          <h3>id: {props.operator.id}</h3>
          <button className='lilb'>Update</button>
        </form>
      </div>
      <style jsx>{`
				form {
					display: flex;
					flex-flow: column nowrap;
					align-items: center;
				}
			`}

      </style>

    </div>
  );
}

OperatorForm.propTypes = {
  operator: PropTypes.object
};
export default OperatorForm;
