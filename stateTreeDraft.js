
const state = {
	user: {
		id: 'anon-345342',
		isOperator: false,
		isConnected: false,
	},
	operatorInfo: {
		id: 'operator-345342',
		avatar: 'avatar.png',
		name: 'Sailor',
		location: 'Portland, OR',
	},
	session: {
		id: 2,
		timeRequested: 23411,
		timeStarted: 23423,
		timeClosed: 23444,
		operatorId: 'operator-345342',
		messages: [
			{
				userId: 'anon-1233523',
				message: 'hello',
				timeStamp: 1
			},{
				userId: 'operator-345342',
				message: 'hi there',
				timeStamp: 2
			},{
				userId: 'anon-1233523',
				message: 'how are you?',
				timeStamp: 3
			},{
				userId: 'operator-345342',
				message: 'im fine',
				timeStamp: 4
			}
		],
		notes: 'this is very productive. what a great person!'
	}
}

const state = {
  user: {
    id: 'operator-345342',
    isOperator: true,
    isConnected: true,
  },
  operatorInfo: {
    id: 'operator-345342',
    avatar: 'avatar.png',
    name: 'Sailor',
    location: 'Portland, OR',
  },
  session: {
    id: 2,
    timeRequested: 23411,
    timeStarted: 23423,
    timeClosed: 23444,
    operatorId: 'operator-345342',
    messages: [
      {
        userId: 'anon-1233523',
        message: 'hello',
        timeStamp: 1
      },{
        userId: 'operator-345342',
        message: 'hi there',
        timeStamp: 2
      },{
        userId: 'anon-1233523',
        message: 'how are you?',
        timeStamp: 3
      },{
        userId: 'operator-345342',
        message: 'im fine',
        timeStamp: 4
      }
    ],
    notes: 'this is very productive. what a great person!'
  }
}

//* if on operator route, home and side content render different content inside. default is chatter route
