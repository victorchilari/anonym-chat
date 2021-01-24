import React, { useContext, useEffect } from 'react';
import { CircularProgress, Grid, List } from '@material-ui/core';
import Message from './Message';
import MessagesStyle from '../Styles/MessagesStyle';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Context } from '..';
import { useAuthState } from 'react-firebase-hooks/auth';

const Messages = () => {
	console.log('render Messages');
	const classes = MessagesStyle();
	const { auth, firestore } = useContext(Context);
	const [user] = useAuthState(auth);
	const [messages, loading] = useCollectionData(
		firestore.collection('messages').orderBy('createDate')
	);

	useEffect(() => {
		const chat = document.getElementById('chatsMessages');
		if (chat) chat.scrollTop = 9999999;
	}, [messages]);

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
				{loading ? (
					<CircularProgress disableShrink />
				) : (
					<List className={classes.messagesArea}>
						{messages.map(message => (
							<Message myId={user.uid} message={message} />
						))}
					</List>
				)}
			</div>
		</Grid>
	);
};

export default Messages;
