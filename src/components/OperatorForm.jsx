import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import types from './../constants';
import constants from './../constants';
const {firebaseConfig, types} = constants;

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
	let _avatar = null;
	let _name = null;
	let _location = null;

	function handleAddingOperator(){
		console.log('time to change the state ⌚️');
		const { dispatch } = props;
		const action = {
			type: types.ADD_OPERATOR,
			avatar: _avatar.value,
			id: 'operator_q',
			name: _name.value,
			location: _location.value
		};
		dispatch(action);
		_avatar.value = '';
		_name.value = '';
		_location.value = '';
	}
  return(
	<div>
		<h2>Operator Info</h2>
		<div className='sCard'>
			<form onSubmit={handleAddingOperator}>
				<div style={avatarStyle}>
					<input
						type='text'
						id='avatar'
						placeholder={props.operator.avatar}
						ref={(input) => {_avatar = input;}}
						/>
					<label>avatar url</label>
				</div>
				<div>
					<label>name</label>
					<input
						type='text'
						id='name'
						placeholder={props.operator.name}
						ref={(input) => {_name = input;}}
						/>
				</div>
				<div>
					<label>location</label>
					<input
						type='text'
						id='location'
						placeholder={props.operator.location}
						ref={(input) => {_location = input;}}
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
export default connect()(OperatorForm);
