import React from 'react';
import { connect } from 'react-redux';
import types from './../constants';

function ChatterForm(props){
	console.log(props);
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
	let _avatar = null;
	let _name = null;
	let _location = null;
	function handleAddingChatter(){
		console.log('time to change the state ⌛️');
		const { dispatch } = props;
		const action = {
			type: types.ADD_CHATTER,
			avatar: _avatar.value,
			name: _name.value,
			location: _location.value
		};
		dispatch(action);
		// _avatar.value = '';
		// _name.value = '';
		// _location.value = '';
	}
  return(
    <form style={chatterFormStyle} onSubmit={handleAddingChatter}>
      <h2>Your Info</h2>
      <div className='sCard'>
        <small>Adding information is optional. </small>
        <small>We will not share your information with anyone.</small>

        <div style={avatarStyle}>
          <div style={{float:'left'}}>
            <input
              type='text'
              id='avatar'
              placeholder= 'paste an image url'
              ref={(input) => {_avatar = input;}}/>
            <button className='lilb'>add</button>
          </div>
        </div>
        <div>
          <label>your name <span style={{fontSize: '0.75em'}}>(what you would like us to call you)</span></label>
          <input
            type='text'
            id='name'
            placeholder='ex. Jamie'
            ref={(input) => {_name = input;}}/>
          <button className='lilb'>add</button>
        </div>
        <label style={{marginRight:'60%'}}>your location</label>
        <div>
          <input
            type='text'
            id='location'
            placeholder='ex. Sarasota, FL'
            ref={(input) => {_location = input;}}/>
          <button type='submit'className='lilb'>add</button>
        </div>
      </div>

    </form>
  );
}

export default connect()(ChatterForm);
