import React from 'react';
import OperatorInfo from './OperatorInfo';

function SideContent() {
	const sideStyle = {
		border: '3px solid #979797',
		backgroundColor: '#D8D8D8',
		display: 'flex',
		flexFlow: 'column nowrap',
		justifyContent: 'center',
		height: '60vh',
		minWidth: '400px'
	};
	return(
  <div style={sideStyle}>
    <OperatorInfo/>
  </div>
	);
}

export default SideContent;
