import React from 'react';

function SideContent() {
	const sideStyle = {
		border: '3px solid #979797',
		backgroundColor: '#D8D8D8',
		display: 'flex',
		flexFlow: 'column nowrap',
		alignItems: 'center',
		justifyContent: 'center',
		height: '60vh',
		minWidth: '400px'
	};
	return(
  <div style={sideStyle}>Side Content Works!</div>
	);
}

export default SideContent;
