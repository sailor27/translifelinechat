import React from 'react';
import Message from './Message';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import types from './../constants';

class Session extends React.Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){
		this.props.startSession();
	}
	componentWillUnmount(){
		this.props.endSession();
	}
	render(){

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

		let user = this.props.currentUser;
		let messages = this.props.currentSession.messages;
		let time;
		let _string = null;

		const { dispatch } = this.props;

		function handleAddingMessage(e){
			e.preventDefault();
			console.log('time to change the state ⏲');
			const action = {
				type: types.ADD_MESSAGE,
				timeStamp: Date.now(),
				isOp: user.isOperator,
				string: _string.value
			};
			dispatch(action);
			_string.value = '';
		}

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
    <form onSubmit={handleAddingMessage}>
      <input
        type='text'
        id='name'
        placeholder= 'Type your message here [Press Enter to Send]'
        ref={(input) => {_string = input;}}/>
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
}

Session.propTypes = {
	currentSession: PropTypes.object,
	currentUser: PropTypes.object,
	startSession: PropTypes.func,
	endSession: PropTypes.func
};

export default connect()(Session);
