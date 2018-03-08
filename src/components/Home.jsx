import React from 'react';
import SideContent from './SideContent';
import Info from './Info';
import HowTo from './HowTo';
import OperatorStatus from './OperatorStatus';
import Incoming from './Incoming';
import Session from './Session';
import Notes from './Notes';
import { connect } from 'react-redux';
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
		console.log(this.props.user.isConnected);

		let mainContent;
		if(!this.props.user.isConnected && !this.props.user.isOperator){
			console.log('👁 condition 1');
			mainContent =
  <div>
    <Info/>
    <HowTo/>
  </div>;
		} else if (this.props.user.isConnected && this.props.user.isOperator){
			console.log('👁 condition 2');
			mainContent=
  <div>
    <Info/>
    <Session currentSession={this.props.session} currentUser= {this.props.user}/>
    <Notes id={this.props.session.id}/>
  </div>;
} else if (this.props.user.isOperator){
			console.log('👁 condition 3');
			mainContent =
  <div className='main'>
    <OperatorStatus/>
    <Incoming session={this.props.session}/>
  </div>;
		} else {
			console.log('👁 condition 4');
			mainContent=
  <div>
    <Info/>
    <Session currentSession={this.props.session} currentUser= {this.props.user}/>
  </div>;

		}
		return(
  <div style={homeStyle}>
    <SideContent user={this.props.user} operator={this.props.operatorInfo}/>
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

const mapStateToProps = state => {
	return {
		user: state.user,
		operatorInfo: state.operatorInfo,
		session: state.session
	};
};

Home.propTypes = {
	user: PropTypes.object,
	operatorInfo: PropTypes.object,
	session: PropTypes.object
};

export default connect(mapStateToProps)(Home);
