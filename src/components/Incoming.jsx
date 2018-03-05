import React from 'react';
import PropTypes from 'prop-types';

function Incoming(props){
	const incomingStyle = {
		border: '3px solid #979797',
		backgroundColor: '#F8F8F8',
		display: 'flex',
		flexFlow: 'column nowrap',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '15px',
		marginTop: '90px',
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
	let time = Date.now();
	console.log(time);
	let timeWaiting = ((props.session.timeRequested - time) );
	return(
  <div style={incomingStyle}>
    <h1>Incoming Sessions</h1>
    <h4>Click 'CONNECT' to begin a chat sesion. Scroll to see more chats in the queue.</h4>
    <div className='card'>
      <div className='col'>
        <p>#{props.session.id}</p>
        <p>Waiting for: {timeWaiting}</p>
        <button>Connect</button>
      </div>
      <div className='col'>
        <p>Chatter Name</p>
        <p>Chatter Location</p>
      </div>
      <div style={chatterAvatar}></div>
    </div>
    <style jsx  global>{`
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
			flex-flow: column nowrap;
			line-height: 0.4em;
		}
	`}</style>
  </div>
	);
}

Incoming.propTypes = {
	session: PropTypes.object
};
export default Incoming;
