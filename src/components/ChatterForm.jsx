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
      <small>Your information is optional and confidential</small>
      <div className='sCard'>

        <div style={avatarStyle}>
          <form>
            <input
              type='text'
              id='avatar'
              placeholder= 'paste and image url'
              />
            <button className='lilb'>add</button>
          </form>
        </div>
        <form>
          <input
            type='text'
            id='name'
            placeholder='your name (what you would like us to call you)'
            />
          <button className='lilb'>add</button>
        </form>
        <form>
          <input
            type='text'
            id='location'
            placeholder='your location'
            />
          <button className='lilb'>add</button>
        </form>
      </div>

    </div>
  );
}

export default ChatterForm;
