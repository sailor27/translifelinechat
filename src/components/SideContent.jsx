import React from 'react';
import OperatorInfo from './OperatorInfo';
import OperatorForm from './OperatorForm';
import ChatHistory from './ChatHistory';
import PropTypes from 'prop-types';

function SideContent(props) {
	const sideStyle = {
		border: '3px solid #979797',
		backgroundColor: '#D8D8D8',
		display: 'flex',
		flexFlow: 'column nowrap',
		alignItems: 'center',
		maxHeight: '900px',
		minWidth: '400px'
	};

	let topBox;
	let bottomBox;

	if(props.user.isOperator){
		topBox = <OperatorForm operator={props.operator}/>;
		bottomBox = <ChatHistory/>;
	} else {
		topBox = <OperatorInfo operator={props.operator}/>;
	}
	return(
  <div style={sideStyle}>
    {topBox}
    {bottomBox}
  </div>
	);
}

SideContent.propTypes = {
	operator: PropTypes.object,
	user: PropTypes.object
};

export default SideContent;
