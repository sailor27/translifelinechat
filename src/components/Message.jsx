import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

function Message(props){

	let messageStyle;
	let messageAreaStyle;

	if (!props.isOp){
		messageStyle = {
			maxWidth: '50%',
			borderRadius: '15px',
			padding: '12px',
			position: 'relative',
			color: 'white',
			backgroundColor: '#5074AB',
			textAlign: 'left'
		};
		messageAreaStyle ={
			margin: '20px',
			display:'flex',
			flexFlow: 'column nowrap',
			alignItems: 'flex-end'
		};
	} else {
		messageStyle = {
			backgroundColor: '#E27995',
			maxWidth: '50%',
			borderRadius: '15px',
			padding: '12px',
			position: 'relative',
			color: 'white',
			textAlign: 'left'
		};
		messageAreaStyle ={
			margin: '20px',
			display:'flex',
			flexFlow: 'column nowrap',
			alignItems: 'flex-start'
		};
	}

	return(
		<div style={messageAreaStyle}>
			<div style={messageStyle}>
				<li>{props.string}</li>
				{/*<div className='tri'></div>*/}
				<style jsx>
					{`
				li {
					list-style:none;
				}
				.tri {
					position: absolute;
					width: 0;
					height: 0;
					top: 40px;
					left: 490px;
					border-top: 18px solid var(--blue);
					border-left: 18px solid transparent;
				}
			`}
				</style>
			</div>
			<p style={{textAlign: 'left', margin: '0px', color: '#979797', fontSize: '0.7em'}}>{moment(props.time).format('MMMM Do, h:mm a')}</p>
		</div>
	);
}

Message.propTypes = {
	string: PropTypes.string,
	time: PropTypes.number,
	isOp: PropTypes.bool
};
export default Message;
