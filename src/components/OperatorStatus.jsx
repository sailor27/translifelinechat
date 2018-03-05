import React from 'react';
function OperatorStatus(){

  const statusStyle = {
		border: '3px solid #979797',
		backgroundColor: '#F8F8F8',
		minWidth: '400px',
		padding: '20px',
    display: 'flex',
    flexFlow: 'column nowrap'
	};
  return(
    <div style={statusStyle}>
      <div className='top'>

        <h1 style={{marginRight:'90px'}}>Operator Status</h1>
        <div style={{marginTop:'50px'}}>
          <button className='unpressed'>ON CALL</button>
          <button className='pressed'>OFF CALL</button>
        </div>
      </div>
      <p>Set your status to 'ON CALL' when you answer a phone call, and 'OFF CALL' when you are ready to answer a new phone call or chat session.</p>
      <p>Your status will automatically be set to 'ON CALL' when you start a new chat session, and 'OFF CALL' when the session ends.</p>
      <style jsx>
        {`
        .top{
          display: flex;
          justify-content: center;
        }
        .pressed{
          background-color: var(--blue);
          box-shadow: inset 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        }
        .unpressed{
          box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        }
          `}
      </style>
    </div>
  );
}
export default OperatorStatus;
