import React from 'react';
import PropTypes from 'prop-types';

function OperatorInfo(props){
	const operator = props.operator;
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
		backgroundImage: `url(${operator.avatar})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		padding: '20px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	};
	return(
		<div style={operatorStyle}>
			<h3>Chatting with</h3>
			<div style={avatarStyle}>
			</div>
			<div className="info">
				<p>{operator.name}</p>
				<p>{operator.location}</p>
				<p>Connected Now</p>
				<button onClick={props.disconnect}>END CHAT</button>
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

OperatorInfo.propTypes = {
	operator: PropTypes.object,
	disconnect: PropTypes.func
};

export default OperatorInfo;
