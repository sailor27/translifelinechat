import React from 'react';
import SideContent from './SideContent';
import Info from './Info';
import HowTo from './HowTo';
import OperatorStatus from './OperatorStatus';
import Incoming from './Incoming';
import Session from './Session';
import Notes from './Notes';
import { connect } from 'react-redux';
import types from './../constants';
import PropTypes from 'prop-types';

class Home extends React.Component{
	render(){
		const homeStyle = {
				boxSizing: 'border-box',
				marginTop: '90px',
				minHeight: '100vh',
				width: '90vw',
				display: 'flex',
				padding: '10px',
				justifyContent: 'space-around',
			};
		const { dispatch } = this.props;

		let mainContent;

		function handleSessionStart(){
			console.log('time to change the state 🕰');
			const action = {
				type: types.START_SESSION
			};
			dispatch(action);
		}
		function handleSessionEnd(){
			console.log('time to change the state 🎬');
			const action = {
				type: types.END_SESSION,
				timeStarted: this.currentSession.timeStarted
			};
			dispatch(action);
		}

		function handleConnectingUser(){
			console.log('time to change the state 🕒');
			const action = {
				type: types.CONNECT_USER
			};
			dispatch(action);
		}
		function handleAddingSession(){
			console.log('time to change the state ⏰');
			console.log(this.currentSession.timeStarted);
			const action = {
				type: types.ADD_SESSION,
				id: this.currentSession.id,
				timeRequested: this.currentSession.timeRequested,
				timeStarted: this.currentSession.timeStarted,
				timeClosed: this.currentSession.timeClosed,
				operatorId: this.currentSession.operatorId,
				notes: this.currentSession.notes
			};
			dispatch(action);

		}

			if(!this.props.user.isConnected && !this.props.user.isOperator){
			console.log('👁 condition 1');
			mainContent = <div>
  <Info/>
  <HowTo connectUser={handleConnectingUser}/>
			</div>;
			} else if (this.props.user.isConnected && this.props.user.isOperator){
			console.log('👁 condition 2');
  		mainContent=<div>
    <Info/>
    <Session currentSession={this.props.session}
      currentUser= {this.props.user}
      startSession={handleSessionStart}
      endSession={handleSessionEnd}
      addSession={handleAddingSession}
				/>
    <Notes id={this.props.session.id}/>
  </div>;
			} else if (this.props.user.isOperator){
			console.log('👁 condition 3');
				mainContent = <div className='main'>
  <OperatorStatus/>
  <Incoming
    session={this.props.session}
    connectUser={handleConnectingUser}
					/>
				</div>;
			} else {
			console.log('👁 condition 4');
			mainContent=<div>
  <Info/>
  <Session currentSession={this.props.session} 	currentUser= {this.props.user}
    startSession={handleSessionStart}
    endSession={handleSessionEnd}
    addSession={handleAddingSession}
				/>
			</div>;
			}
		return(
  	<div style={homeStyle}>
    <SideContent user={this.props.user} 			operator={this.props.operatorInfo}
      chatter={this.props.chatterInfo}/>
    {mainContent}
    <style jsx >
      {`
					.main {
						display:flex;
						flex-flow: column;
						align-items: center;
						min-width: 400px;
						padding: 40px;
					}
				`}
    </style>
  </div>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.user,
		operatorInfo: state.operatorInfo,
		chatterInfo: state.chatterInfo,
		session: state.session
	};
};

Home.propTypes = {
	user: PropTypes.object,
	operatorInfo: PropTypes.object,
	chatterInfo: PropTypes.object,
	session: PropTypes.object
};

export default connect(mapStateToProps)(Home);
