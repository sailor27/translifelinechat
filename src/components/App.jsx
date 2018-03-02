import React from 'react';
import Header from './Header';
import Home from './Home';
import memphis from '../assets/images/memphis.png';

function App(){
	var appStyle = {
		margin: '0px',
		background: `url(${memphis})`,
		backgroundSize: 'cover',
		color: 'black',
		fontFamily: 'Open Sans',
		textAlign: 'center',
		boxSizing: 'border-box',
		padding: '0px',
		width: '100vw',
		display:'flex',
		justifyContent: 'center',
	};
	return(
  <div style={appStyle}>
    <style global jsx>
      {`
				:root {
					--blue: #5074AB;
					--rose: #E27995;
					--grey: #F8F8F8;
					--dkgrey: #979797;
					--ltblue: #9EB9E1;
					--light-peach: #ffe3ce;
					--peach: #ffbdb4;
					--periwink: #b0cbff;
					--lightblue: #e2edff;
					--navy: #606f92;
					--blueblack: rgb(19, 36, 115);
				}
				@import url('https://fonts.googleapis.com/css?family=Josefin+Slab:400,700i|Open+Sans+Condensed:300,700|Open+Sans:400,700');

				a {
					text-decoration: none;
					color: var(--blueblack);
				}

				a:hover{
					font-style: italic;
				}`}
    </style>
    <Header/>
    <Home/>
  </div>
	);
}
export default App;
