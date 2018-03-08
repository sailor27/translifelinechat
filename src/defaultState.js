export const defaultState = {
  user: {
    id: null,
    isOperator: false,
    isConnected: false,
  },
  operatorInfo: {
    id: null,
    avatar: null,
    name: null,
    location: null,
  },
  session: {
    id: null,
    timeRequested: null,
    timeStarted: null,
    timeClosed: null,
    operatorId: null,
    messages: [
      {
        timeStamp: Date.now(),
        isOp: false,
        string: 'this is a message'
      }
    ],
    notes: ''
  }
};
