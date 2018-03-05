import React from 'react';

function ChatterForm(){
  const chatterFormStyle={
    maxWidth: '350px'
  };
  const avatarStyle = {
    height: '180px',
    width: '180px',
    color: 'white',
    borderRadius: '50%',
    backgroundColor: '#5074AB',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
  return(
    <div style={chatterFormStyle}>
      <h2>Your Info:</h2>
      <div className='sCard'>
        <small>Adding information is optional. </small>
        <small>We will not share your information with anyone.</small>

        <div style={avatarStyle}>
          <form style={{float:'left'}}>
            <input
              type='text'
              id='avatar'
              placeholder= 'paste an image url'
              />
            <button className='lilb'>add</button>
          </form>
        </div>
        <form>
          <label>your name <span style={{fontSize: '0.75em'}}>(what you would like us to call you)</span></label>
          <input
            type='text'
            id='name'
            placeholder='ex. Jamie'
            />
          <button className='lilb'>add</button>
        </form>
        <label style={{marginRight:'60%'}}>your location</label>
        <form>
          <input
            type='text'
            id='location'
            placeholder='ex. Sarasota, FL'
            />
          <button className='lilb'>add</button>
        </form>
      </div>

    </div>
  );
}

export default ChatterForm;
