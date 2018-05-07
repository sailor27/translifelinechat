import constants from './../constants';
const { firebaseConfig, types } = constants;
import Firebase from 'firebase';
firebase.initializeApp(firebaseConfig);

const messages = firebase.database().ref('messages');

export function addMessage(_timeStamp, _isOp, _string) {
    return () => messages.push({
        timeStamp: _timeStamp,
        isOp: _isOp,
        string: _string
    });
}

export function watchFirebaseMessagesRef() {
  return function(dispatch) {
    messages.on('child_added', data => {
      const newMessage = Object.assign({}, data.val(), {
          id: data.getKey()
      });
      dispatch(receiveMessage(newMessage));
    });
  };
}

function receiveMessage(messageFromFirebase) {
    return {
        type: types.RECEIVE_MESSAGE,
        message: messageFromFirebase
    };
}
