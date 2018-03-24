import React from 'react';
import PropTypes from 'prop-types';

function ChatterInfo(props){
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
		backgroundImage: `url(${props.chatter.avatar})`,
		backgroundSize:'contain',
		padding: '20px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	};
	let name = '';
	if (!props.chatter.name) {
		name = 'name not provided';
	} else {
		name = props.chatter.name;
	}
	let avatar = '';
	if (!props.chatter.avatar) {
		 avatar = <h2>{name}</h2>;
	}
	let location = '';
	if (!props.chatter.location) {
		location = 'location not provided';
	} else {
		location = props.chatter.location;
	}
	return(
  <div style={operatorStyle}>
    <div style={avatarStyle}>
      {avatar}
    </div>
    <div className="info">
      <p>{name}</p>
      <p>{location}</p>
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
ChatterInfo.propTypes = {
	disconnect: PropTypes.func,
	chatter: PropTypes.object
};
export default ChatterInfo;
