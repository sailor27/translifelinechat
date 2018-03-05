import React from 'react';
import OperatorInfo from './OperatorInfo';
import OperatorForm from './OperatorForm';
import PropTypes from 'prop-types';

function SideContent(props) {
	const sideStyle = {
		border: '3px solid #979797',
		backgroundColor: '#D8D8D8',
		display: 'flex',
		flexFlow: 'column nowrap',
		justifyContent: 'center',
		maxHeight: '50vh',
		minWidth: '400px'
	};

	let topBox;
	let bottomBox;
	if(props.user.isOperator){
		topBox = <OperatorForm operator={props.operator}/>;
		bottomBox = <div>Chat history here</div>;
	} else {
		topBox = <OperatorInfo operator={props.operator}/>;
	}
	return(
  <div>
    <div style={sideStyle}>
      {topBox}
    </div>
    <div style={sideStyle}>

    </div>
  </div>
	);
}

SideContent.propTypes = {
	operator: PropTypes.object,
	user: PropTypes.object
};

export default SideContent;
