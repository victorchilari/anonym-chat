import React, { useContext, useEffect, useState } from 'react';
import { CircularProgress, Grid, List } from '@material-ui/core';
import Message from './Message';
import MessagesStyle from '../Styles/MessagesStyle';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Context } from '..';
import { useAuthState } from 'react-firebase-hooks/auth';

const Messages = () => {
	const [value, setValue] = useState([
		{ text: '', createDate: { seconds: 1 } }
	]);
	const classes = MessagesStyle();
	const { auth, firestore } = useContext(Context);
	const [user] = useAuthState(auth);
	let [messages, loading] = useCollectionData(
		firestore.collection('messages').orderBy('createDate')
	);
	// if (messages === undefined || messages.length == 0) {
	// 	messages = [{ createDate: { seconds: 0 } }];
	// } else if (messages[messages.length - 1].createDate === null) {
	// 	messages[messages.length - 1].createDate = { seconds: 0 };
	// }
	console.log('render Messages');
	// console.log(messages[messages.length - 1]);
	const toBottom = () => {
		const chat = document.getElementById('chatsMessages');
		if (chat) chat.scrollTop = 9999999;
	};
	// if (
	// 	(messages[messages.length - 1].createDate.seconds != 0) &
	// 	(messages.length != value.length)
	// 	// &
	// 	// (messages[messages.length - 1].createDate.seconds !=
	// 	// 	value[value.length - 1].createDate.seconds) &
	// 	// (messages[messages.length - 1].text !== value[value.length - 1].text)
	// ) {
	// 	// console.log(messages[messages.length - 1].createDate.seconds);
	// 	// console.log(
	// 	// 	messages[messages.length - 1].createDate.seconds !=
	// 	// 		value[value.length - 1].createDate.seconds,
	// 	// 	messages[messages.length - 1].createDate.seconds,
	// 	// 	value[value.length - 1].createDate.seconds
	// 	// );
	// 	// console.log(
	// 	// 	messages[messages.length - 1].text !== value[value.length - 1].text,
	// 	// 	messages[messages.length - 1].text,
	// 	// 	value[value.length - 1].text
	// 	// );
	// 	console.log('if');
	// 	// setValue(messages);
	// 	toBottom();
	// }
	useEffect(() => {
		// if (
		// 	messages != undefined &&
		// 	messages[messages.length - 1].createDate.seconds !=
		// 		value[value.length - 1].createDate.seconds &&
		// 	messages[messages.length - 1].text === value[value.length - 1].text
		// ) {
		// 	setValue(messages);
		// }
		// messages == undefined && messages.push([{ nanoseconds: 1 }]);
		console.log('effect');
		toBottom();
	}, [
		value[value.length - 1].createDate.seconds,
		value[value.length - 1].createDate.nanoseconds
	]);

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
							<Message
								key={
									message.createDate &&
									message.createDate.seconds +
										'' +
										message.createDate.nanoseconds
								}
								myId={user.uid}
								message={message}
							/>
						))}
					</List>
				)}
			</div>
		</Grid>
	);
};

export default Messages;
