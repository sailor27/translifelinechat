import React from 'react';
import Message from './Message';
import PropTypes from 'prop-types';

function Session(props){
	const sessionStyle = {
		marginTop: '90px',
		border: '3px solid #979797',
		backgroundColor: '#F8F8F8',
		minHeight: '500px',
		marginLeft: '40px',
		position: 'relative',
		boxSizing: 'border-box',
		display: 'flex',
		justifyContent: 'space-between',
		flexFlow: 'column nowrap',
	};
	const convoAreaStyle = {
		display: 'flex',
		justifyContent: 'flex-start',
		flexFlow: 'column nowrap',
	};

	let user = props.currentUser;
	let messages = props.currentSession.messages;
	let time;

	console.log(props.currentSession.messages);
	return(
  <div style={sessionStyle}>
    <div style={convoAreaStyle}>
      <ul style={{padding: '0px'}}>
        {messages.map((message, i) =>
          <Message string={messages[i].string}
            time = {messages[i].timeStamp}
            isOp={messages[i].isOp}
            key={messages[i].timeStamp} />
					)}
      </ul>
    </div>
    <form onSubmit={props.addMessage}>
      <input
        type='text'
        id='name'
        placeholder= 'Type your message here [Press Enter to Send]'
        ref={(input) => {}}/>
      <button type='submit'>SEND</button>
    </form>
    <style jsx>{`
				form {
					display: flex;
					box-sizing: border-box;
					width: 100%;
				}
				input {
					width: 100%;
					font-size: 1em;
					line-height: 2em;
					padding-left: 10px;
					cursor: pointer;
					border-top-right-radius: 5px;
					border-bottom-right-radius: 5px;
					box-sizing: border-box;
					border: 1px solid var(--dkgrey);
				}
				input::placeholder{
					color: var(--dkgrey);
					padding-left: 10px;
				}
				li{
					list-style: none;
				}
				`}</style>

  </div>
	);
}

Session.propTypes = {
	currentSession: PropTypes.object,
	currentUser: PropTypes.object,
	addMessage: PropTypes.func
};

export default Session;
