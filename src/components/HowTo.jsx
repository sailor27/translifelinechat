import React from 'react';

function HowTo() {
	const howToChat = ['First, we’ll connect you to a chat operator.', ' If all our operators are busy, please wait and we will help you as soon as we can. You can also call our phone line: US: (877) 565-8860 CANADA: (877) 330-6366', 'A trans-identified volunteer will answer your chat. Type in the text box and press send to talk with the operator.', 'The operator will listen non-judgementally and help you get through what you’re going through. None of our operators will call emergency services without your consent and cooperation.'];

	const howToStyle = {
		border: '3px solid #979797',
		backgroundColor: '#F8F8F8',
		display: 'flex',
		flexFlow: 'column nowrap',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: '90px',
		minHeight: '500px'
	};
	return(
  <div style={howToStyle}>
    <h1 style={{fontFamily:'Josefin Slab', fontWeight: 'bold'}}> How to Chat with Trans Lifeline</h1>
    <ol>
      {howToChat.map((step, index) =>
        <div key={index} className='list'><li >{step}</li></div>)}
    </ol>
    <button>Connect</button>

    <style jsx> {`
			ol{
				height: 70%;
				text-align: left;
				display: flex;
				flex-flow: column nowrap;
				justify-content: space-between;
			}
			.list{
				border: 2px solid var(--dkgrey);
				background-color: var(--ltblue);
				min-height: '250px';
				max-width: 67800px;
				padding: 20px 20px 20px 35px;
				border-radius: 10px;
				margin: 10px 10px 10px 5px;
			}
			button {
				border: 2px solid var(--dkgrey);
				border-radius: 10px;
				font-size: 1em;
				padding: 10px 20px 10px 20px;
				background-color: var(--rose);
				color: white;
				margin-bottom: 20px;
			}
		`}</style>
  </div>
	);
}

export default HowTo;
