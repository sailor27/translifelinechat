import React from 'react';
import PropTypes from 'prop-types';

function Message(props){
	const messageStyle = {
		width: '50%',
		backgroundColor: '#5074AB',
		borderRadius: '15px',
		padding: '12px',
		position: 'relative',
		color: 'white',
		textAlign: 'left'
	};
	return(
  <div style={{margin: '30px'}}>
    <div style={messageStyle}>
      <li>{props.message}</li>
      {/* <div className='tri'></div> */}
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
	message: PropTypes.string,
	time: PropTypes.number,
	user: PropTypes.string
};
export default Message;
