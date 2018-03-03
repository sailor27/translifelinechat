import React from 'react';

function Message(){
	const messageStyle = {
		width: '50%',

		backgroundColor: '#5074AB',
		borderRadius: '15px',
		padding: '12px',
		position: 'relative'
	};
	return(
  <div style={{margin: '30px'}}>
    <div style={messageStyle}>
      <li>message goes here</li>
      <div className='tri'></div>
      <style jsx>
        {`
			li {
				list-style:none;
			}
			.tri {
				position: absolute;
				width: 0;
				height: 0;
				top: 40px;
				left: 490px;
				border-top: 18px solid var(--blue);
				border-left: 18px solid transparent;
			}
			`}
      </style>
    </div>
    <p style={{float: 'left', margin: '0px', color: '#979797', fontSize: '0.8em'}}>8:00pm</p>
  </div>
	);
}


export default Message;
