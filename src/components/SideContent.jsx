import React from 'react';
import moment from 'moment';
import OperatorInfo from './OperatorInfo';
import ChatterInfo from './ChatterInfo';
import OperatorButton from './OperatorButton';
import OperatorForm from './OperatorForm';
import ChatterForm from './ChatterForm';
import ChatHistory from './ChatHistory';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import types from './../constants';
import constants from './../constants';
const {firebaseConfig, types} = constants;

function SideContent(props) {
	let time = moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a');
	const sideStyle = {
		border: '3px solid #979797',
		backgroundColor: '#D8D8D8',
		display: 'flex',
		flexFlow: 'column nowrap',
		alignItems: 'center',
		maxHeight: '900px',
		minWidth: '400px'
	};

	let topBox;
	let bottomBox;

	function handleDisconnectingUser(){
		console.log('time to change the state 🎛');
		const {dispatch} = props;
		const action = {
			type: types.DISCONNECT_USER
		};
		dispatch(action);
	}

	if(!props.user.isConnected && !props.user.isOperator){
		console.log('🔍 condition 1');
		topBox = <ChatterForm/>;
		bottomBox = <OperatorButton/>;
	} else if (props.user.isConnected && props.user.isOperator){
		console.log('🔍 condition 2');
		topBox = <ChatterInfo
			disconnect={handleDisconnectingUser}
			chatter={props.chatter}/>;
		bottomBox = <ChatHistory/>;
	} else if (props.user.isOperator){
		console.log('🔍 condition 3');
		topBox = <OperatorForm operator={props.operator}/>;
		bottomBox = <ChatHistory/>;
	} else {
		console.log('🔍 condition 4');
		topBox = <OperatorInfo operator={props.operator}
			disconnect={handleDisconnectingUser}/>;
	}


	return(
		<div style={sideStyle}>
			{topBox}
			<h4>🕑 {time}</h4>
			{bottomBox}
		</div>
	);
}

SideContent.propTypes = {
	operator: PropTypes.object,
	user: PropTypes.object,
	chatter: PropTypes.object
};

export default connect()(SideContent);
