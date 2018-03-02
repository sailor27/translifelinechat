import React from 'react';

function Info() {
	const infoText = 'Trans Lifeline operators are all trans-identified volunteer who want to help you get through what you are going through. We train people to listen non-judgmentally and help you access resources.';

	const infoStyle = {
		border: '3px solid #979797',
		backgroundColor: '#F8F8F8',
		minWidth: '400px',
		padding: '20px'
	};
	return(
  <div style={infoStyle}>
    <h1 style={{fontFamily:'Josefin Slab', fontWeight: 'bold'}}>Trans Lifeline Chat</h1>
    <p>{infoText}</p>
  </div>
	);
}

export default Info;
