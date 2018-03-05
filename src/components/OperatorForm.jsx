import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

function OperatorForm(props){
  console.log(props);
  let time = moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a');
  const avatarStyle = {
    height: '180px',
    width: '180px',
    color: 'white',
    borderRadius: '50%',
    backgroundColor: '#5074AB',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'space-around'
  };
  return(
    <div>
      <h2>Operator Info:</h2>
      <div className='card'>

        <div style={avatarStyle}>
          <form>
            <input
              type='text'
              id='avatar'
              placeholder={props.operator.avatar}
              />
            <button>add</button>
          </form>
        </div>
        <form>
          <input
            type='text'
            id='name'
            placeholder={props.operator.name}
            />
          <button>add</button>
        </form>
        <form>
          <input
            type='text'
            id='location'
            placeholder={props.operator.location}
            />
          <button>add</button>
        </form>
        <h3>id: {props.operator.id}</h3>

      </div>
      <h4> 🕑 {time}</h4>
      <style jsx>{`
          .card {
            flex-flow: column nowrap;
            align-items: center;
            background-color: var(--grey);
          }
          input {
            font-size: 1em;
            margin: 5px;
          }
          button {
            padding: 10px;
          }
          `}
      </style>
    </div>
  );
}

OperatorForm.propTypes = {
  operator: PropTypes.object
};
export default OperatorForm;
