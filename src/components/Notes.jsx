import React from 'react';
import PropTypes from 'prop-types';

function Notes(props) {

	const notesText = 'Record session notes here';

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
	return(
  <div style={notesStyle}>
    <div style={{backgroundColor: 'black', color: 'white', display: 'flex', fontStyle: 'italic', justifyContent: 'space-between', alignItems:'center', padding:'0px 8px'}}>
      <h3> # {props.id} Notes:</h3>
      <button className='lilb'>Save</button>
    </div>
    <form>
      <textarea
        type='text'
        id='notes'
        placeholder={notesText}
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

export default Notes;
