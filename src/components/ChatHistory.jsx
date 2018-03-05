import React from 'react';


function ChatHistory(){
  const historyStyle = {
    overFlow: 'scroll'
  };
  return(
    <div style={historyStyle}>
      <h2>Recent Sessions</h2>
      <div style={{padding: '0px'}}className='sCard'>
        <p style={{fontWeight: 'bold'}}>#30144</p>
        <p>about 20 minutes ago</p>
        <p><a href='#'>see notes</a></p>
      </div>
    </div>
  );
}

export default ChatHistory;
