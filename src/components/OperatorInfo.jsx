import React from 'react';
// import PropTypes from 'prop-types';

function OperatorInfo(){
	const operatorStyle = {
		display: 'flex',
		flexFlow: 'column nowrap',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '30px 0px 30px 0px',
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
  <div style={operatorStyle}>
    <div style={avatarStyle}>
      <h2>operator avatar</h2>
    </div>
    <div className="info">
      <p>Sailor</p>
      <p>Portland, OR</p>
      <p>Connected Now</p>
      <button>END CHAT</button>
    </div>
    <style jsx>
      {`
				.info {
					width: 100%;
					min-height: 140px;
					display: flex;
					flex-flow: column nowrap;
					justify-content: center;
					align-items: center;
				}
				p{
					font-weight: bold;
					line-height: 0.5em;
					list-style:none;
					text-align: center;
				}
			`}
    </style>
  </div>
	);
}

export default OperatorInfo;
