import React from 'react';

function Info() {
	const infoText = 'Trans Lifeline operators are all trans-identified volunteers who want to help you get through what you are going through. We train people to listen non-judgmentally and help you access resources.';

	const infoStyle = {
		border: '3px solid #979797',
		backgroundColor: '#F8F8F8',
		minWidth: '400px',
		padding: '20px',
		marginLeft: '40px'
	};
	return(
		<div style={infoStyle}>
			<h1>
			Trans Lifeline Chat</h1>
			<p>{infoText}</p>
		</div>
	);
}

export default Info;
