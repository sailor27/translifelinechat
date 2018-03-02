import React from 'react';
import logo from '../assets/images/logo.png';
import burger from '../assets/images/burger.png';
// import { Link } from 'react-router-dom';
function Header(){
	const headerStyle = {
		margin: '0px',
		position: 'fixed',
		top: '0px',
		left:'-1px',
		height: '90px',
		width: '100vw',
		backgroundColor: 'black',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'
	};

	return(
  <div style={headerStyle}>
    <img style={{height: '65px', width: '65px'}}src={logo}/>
    <img style={{height: '65px', width: '65px'}} src={burger}/>
  </div>
	);
}

export default Header;
