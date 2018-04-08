import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import types from './../constants';
import constants from './../constants';
const {firebaseConfig, types} = constants;
import moment from 'moment';

function Incoming(props){
	const incomingStyle = {
		border: '3px solid #979797',
		backgroundColor: '#F8F8F8',
		display: 'flex',
		flexFlow: 'column nowrap',
		alignItems: 'center',
		justifyContent: 'flex-start',
		padding: '15px',
		marginTop: '90px',
		marginLeft: '40px',
		minHeight: '500px',
		overFlow: 'scroll'
	};
	const chatterAvatar ={
		height: '60px',
		width: '60px',
		color: 'white',
		borderRadius: '50%',
		backgroundColor: '#5074AB',
		padding: '20px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	};

	let waitTime = moment(props.session.timeRequested).startOf('hour').fromNow();
	console.log(props);
	return(
  <div style={incomingStyle}>
    <h1>Incoming Sessions</h1>
    <h4>Click 'CONNECT' to begin a chat sesion. Scroll to see more chats in the queue.</h4>
    <div className='card'>
      <div className='col'>
        <p>#{props.session.id}</p>
        <p>Requested: {waitTime}</p>
        <button onClick={props.connectUser}>Connect</button>
      </div>
      <div className='col'>
        <p>Chatter Name</p>
        <p>Chatter Location</p>
      </div>
      <div className='col' ><div style={chatterAvatar}></div></div>

    </div>
    <style jsx  >{`
		.card {
			display: flex;
			justify-content: space-between;
			background-color: var(--mdgrey);
			border: 2px solid var(--dkgrey);
			border-radius: 10px;
			padding: 30px;
			min-width: 400px;

		}
		.col {
			display: flex;
			min-width: 200px;
			align-items:center;
			flex-flow: column nowrap;
			line-height: 0.4em;
		}
	`}</style>
  </div>
	);
}

Incoming.propTypes = {
	session: PropTypes.object,
	connectUser: PropTypes.func
};
export default connect()(Incoming);
