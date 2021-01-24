import React from 'react';
import { makeStyles, Grid, List } from '@material-ui/core';
import Message from './Message';
import MessagesStyle from '../Styles/MessagesStyle';

const useStyles = makeStyles({
	messageArea: {
		height: '50px',
		overflowY: 'none'
	}
});
const Messages = props => {
	const classes = MessagesStyle();
	const { messages, uid } = props;

	return (
		<Grid container justify={'center'} style={{ marginTop: 16 }}>
			<div
				id="chatsMessages"
				style={{
					width: '100%',
					height: '60vh',
					border: '1px solid gray',
					overflowY: 'auto'
				}}
			>
				<List className={classes.messageArea}>
					{messages[0] &&
						messages.map(message => <Message myId={uid} message={message} />)}
				</List>
			</div>
		</Grid>
	);
};

export default Messages;
