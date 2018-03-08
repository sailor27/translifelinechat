import React from 'react';
import PropTypes from 'prop-types';

function Message(props){

	let messageStyle;
	if (!props.isOp){
		messageStyle = {
			width: '50%',
			borderRadius: '15px',
			padding: '12px',
			position: 'relative',
			color: 'white',
			backgroundColor: '#5074AB',
			textAlign: 'left'
		};
	} else {
		messageStyle = {
			backgroundColor: '#E27995',
			width: '50%',
			borderRadius: '15px',
			padding: '12px',
			position: 'relative',
			color: 'white',
			textAlign: 'left'
		};
	}

	return(
  <div style={{margin: '30px'}}>
    <div style={messageStyle}>
      <li>{props.string}</li>
      <div className='tri'></div>
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
    <p style={{float: 'left', margin: '0px', color: '#979797', fontSize: '0.8em'}}>{props.time}</p>
  </div>
	);
}

Message.propTypes = {
	string: PropTypes.string,
	time: PropTypes.number,
	isOp: PropTypes.bool
};
export default Message;
