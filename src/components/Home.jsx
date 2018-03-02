import React from 'react';
import Header from './Header';
import SideContent from './SideContent';
import Info from './Info';
import HowTo from './HowTo';

function Home(){
	const homeStyle = {
		boxSizing: 'border-box',
		marginTop: '90px',
		minHeight: '100vh',
		width: '90vw',
		display: 'flex',
		padding: '10px',
		justifyContent: 'space-around',
	};
	return(
  <div style={homeStyle}>
    <SideContent/>
    <div className='main'>
      <Info/>
      <HowTo/>
    </div>
    <style jsx >{`
			.main {
				display:flex;
				flex-flow: column;
				align-items: center;
				min-width: 400px;
			}
		`}</style>
  </div>

	);
}

export default Home;
