export const defaultState = {
  user: {
    id: null,
    isOperator: false,
    isConnected: false,
  },
  operatorInfo: {
    id: 'operator-7',
		avatar: 'http://bit.ly/2FrnQOw',
		name: 'Milhouse',
		location: 'Springfield, OR'
  },
	chatterInfo: {
		avatar: undefined,
		name: undefined,
		location: undefined
	},
  session: {
    id: null,
    timeRequested: null,
    timeStarted: null,
    timeClosed: null,
    operatorId: null,
    messages: [
      {
        timeStamp: 1520535520208,
        isOp: false,
        string: 'this is a message'
      },
      {
        timeStamp: Date.now(),
        isOp: true,
        string: 'this is a message'
      }
    ],
    notes: ''
  }
};
