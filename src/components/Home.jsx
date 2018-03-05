import React from 'react';
import SideContent from './SideContent';
import Info from './Info';
import HowTo from './HowTo';
import OperatorStatus from './OperatorStatus';
import Incoming from './Incoming';
import Session from './Session';
import Notes from './Notes';

class Home extends React.Component{
	constructor(props){
		super(props);
			this.state={
				user: {
					id: 'anon-345342',
					isOperator: true,
					isConnected: true,
				},
				operatorInfo: {
					id: 'operator-345342',
					avatar: 'avatar.png',
					name: 'Sailor',
					location: 'Portland, OR',
				},
				session: {
					id: 2,
					timeRequested: 1520110758097,
					timeStarted: 23423,
					timeClosed: 23444,
					operatorId: 'operator-345342',
					messages: [
						{
							userId: 'anon-1233523',
							message: 'hello',
							timeStamp: 1
						},{
							userId: 'operator-345342',
							message: 'hi there',
							timeStamp: 2
						},{
							userId: 'anon-1233523',
							message: 'how are you?',
							timeStamp: 3
						},{
							userId: 'operator-345342',
							message: 'im fine',
							timeStamp: 4
						}
					],
					notes: 'this is very productive. what a great person!'
				}
			};
	}
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

		let mainContent;

		if(!this.state.user.isConnected && !this.state.user.isOperator){
			console.log('👁 condition 1');
			mainContent =
  <div>
    <Info/>
    <HowTo/>
  </div>;
		} else if (this.state.user.isConnected && this.state.user.isOperator){
			console.log('👁 condition 2');
			mainContent=
  <div>
    <Info/>
    <Session currentSession={this.state.session} currentUser= {this.state.user}/>
    <Notes id={this.state.session.id}/>
  </div>;
		}else if (this.state.user.isOperator){
			console.log('👁 condition 3');
			mainContent =
  <div className='main'>
    <OperatorStatus/>
    <Incoming session={this.state.session}/>
  </div>;
		} else {
			console.log('👁 condition 4');
			mainContent=
  <div>
    <Info/>
    <Session currentSession={this.state.session} currentUser= {this.state.user}/>
  </div>;

		}
		return(
  <div style={homeStyle}>
    <SideContent user={this.state.user} operator={this.state.operatorInfo}/>
    {mainContent}
    <style jsx >{`
								.main {
									display:flex;
									flex-flow: column;
									align-items: center;
									min-width: 400px;
									padding: 40px;
								}
							`}</style>
  </div>
		);
	}
}

export default Home;
