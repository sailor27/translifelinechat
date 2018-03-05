import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

function OperatorForm(props){
  console.log(props);
  let time = moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a');
  const operatorFormStyle={
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
    <div style={operatorFormStyle}>
      <h2>Operator Info:</h2>
      <div className='sCard'>

        <div style={avatarStyle}>
          <form>
            <input
              type='text'
              id='avatar'
              placeholder={props.operator.avatar}
              />
            <button className='lilb'>add</button>
          </form>
        </div>
        <form>
          <input
            type='text'
            id='name'
            placeholder={props.operator.name}
            />
          <button className='lilb'>add</button>
        </form>
        <form>
          <input
            type='text'
            id='location'
            placeholder={props.operator.location}
            />
          <button className='lilb'>add</button>
        </form>
        <h3>id: {props.operator.id}</h3>

      </div>
      <h4> 🕑 {time}</h4>
      <style jsx global>{`
          .sCard {
            display: flex;
      			justify-content: space-between;
            flex-flow: column nowrap;
            align-items: center;
            background-color: var(--grey);
            border: 2px solid var(--dkgrey);
            min-width: 300px;
            border-radius: 10px;
      			padding: 30px;
          }
          input {
            font-size: 1em;
            margin: 5px;
          }
          .lilb {
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
