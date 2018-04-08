import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import types from './../constants';
import constants from './../constants';
const {firebaseConfig, types} = constants;

function Notes(props) {
	const notesText = 'Record session notes here';
	let _notes;
	const notesStyle = {
    marginTop: '35px',
    marginLeft: '40px',
		border: '3px solid #979797',
		backgroundColor: '#F8F8F8',
		minWidth: '400px',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'flex-start',
    padding: '0px'
	};

	function handleAddingNotes(e){
		e.preventDefault();
		console.log('time to change the state ⏰');
		const { dispatch } = props;
		const action = {
			type: types.ADD_NOTES,
			notes: _notes.value
		};
		dispatch(action);
		_notes.value = '';
	}
	return(
  <div style={notesStyle}>
    <div style={{backgroundColor: 'black', color: 'white', display: 'flex', fontStyle: 'italic', justifyContent: 'space-between', alignItems:'center', padding:'0px 8px'}}>
      <h3> # {props.id} Notes:</h3>
      <button onClick={handleAddingNotes} className='lilb' type='submit'>Save</button>
    </div>
    <form>
      <textarea
        type='text'
        id='notes'
        placeholder={notesText}
        ref={(input) => {_notes = input;}}
        />
    </form>
    <style jsx>
      {`
        textarea {
          padding: 15px;
          box-sizing: border-box;
          width: 100%;
          min-height: 180px;
          font-size: 1.25em;
          border: 0px;
          overflow:auto;
        }
        textarea:focus{
          height: 100%;
          box-sizing: border-box;
        }
        button {
          height: 50%;
        }
        `}
    </style>
  </div>
	);
}

Notes.propTypes ={
  id: PropTypes.number
};
export default connect()(Notes);
