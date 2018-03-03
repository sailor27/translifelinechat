import React from 'react';

function Session(){
	const sessionStyle = {
		marginTop: '90px',
		border: '3px solid #979797',
		backgroundColor: '#F8F8F8',
		display: 'flex',
		flexFlow: 'column nowrap',
		justifyContent: 'flex-end',
		minHeight: '500px',
		position: 'relative',
		boxSizing: 'border-box'
	};
	return(
  <div style={sessionStyle}>
    <ul className='messages'>
      <li>placeholder</li>
      <li>placeholder</li>
      <li>placeholder</li>
      <li>placeholder</li>
      <li>placeholder</li>
    </ul>
    <form>
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
				font-size: 1.75em;
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


export default Session;
