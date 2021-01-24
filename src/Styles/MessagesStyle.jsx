import { makeStyles } from '@material-ui/core';

const MessagesStyle = makeStyles({
	messagesArea: {
		height: '50px',
		overflowY: 'none'
	},
	inline: {
		display: 'inline',
		maxWidth: '600px'
		// flexWrap: 'wrap-reverse'
		// flexDirection: 'column-reverse'
	},
	notmyMessage: {
		maxWidth: '600px',
		wordWrap: 'break-word',
		'& *': {
			display: 'flex',
			backgroundColor: 'red'
		}
	},
	myMessage: {
		maxWidth: '600px',
		wordWrap: 'break-word',
		'& *': {
			display: 'flex',
			flexDirection: 'row-reverse',
			backgroundColor: 'green'
		}
	}
});

export default MessagesStyle;
