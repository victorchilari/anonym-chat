import React from 'react';
import { Grid, ListItem, ListItemText, Typography } from '@material-ui/core';
import MessagesStyle from '../Styles/MessagesStyle';

export const Time = props => {
	const classes = MessagesStyle();

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
	const classes = MessagesStyle();

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
	const classes = MessagesStyle();

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
