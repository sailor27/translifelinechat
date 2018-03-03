import React from 'react';
import Header from './Header';
import SideContent from './SideContent';
import Info from './Info';
import HowTo from './HowTo';

class Home extends React.Component{
	constructor(props){
		super(props);
			this.state={
				user: {
					id: 'anon-345342',
					isOperator: false,
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
					timeRequested: 23411,
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
		let mainContent =
  <div className='main'>
    <Info/>
    <HowTo/>
  </div>;

		if(this.state.user.isConnected){
			mainContent=<div>conditional works!</div>;
		}

		return(
  <div style={homeStyle}>
    <SideContent/>
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
