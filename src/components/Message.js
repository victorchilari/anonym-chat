import React from 'react';
import {
	makeStyles,
	Grid,
	ListItem,
	ListItemText,
	Typography
} from '@material-ui/core';

const useStyles = makeStyles({
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

export const Time = props => {
	const classes = useStyles();

	const { time } = props;
	return (
		<Typography
			multiline
			component="span"
			variant="body2"
			className={classes.inline}
			color="textPrimary"
		>
			{time}
		</Typography>
	);
};

export const Context = props => {
	const classes = useStyles();

	const { itsMe, text, time } = props;
	return (
		<ListItemText
			className={itsMe ? classes.myMessage : classes.notmyMessage}
			primary={
				<>
					<Time time={time} />
					{text}
				</>
			}
		></ListItemText>
	);
};

const Message = props => {
	const classes = useStyles();

	const { message, myId } = props;
	const time = new Date(
		message.createDate &&
			message.createDate.seconds * 1000 +
				message.createDate.nanoseconds / 1000000
	)
		.toLocaleString()
		.substring(12, 17);
	const text = message.text;
	const itsMe = myId === message.uid;
	return (
		<ListItem key={message.createDate}>
			<Grid item xs={12} align={itsMe ? 'right' : 'left'}>
				<ListItemText
					className={itsMe ? classes.myMessage : classes.notmyMessage}
					primary={<Context time={time} text={text} itsMe={itsMe} />}
				></ListItemText>
			</Grid>
		</ListItem>
	);
};

export default Message;
