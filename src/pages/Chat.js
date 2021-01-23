import React, { useCallback, useContext, useEffect, useState } from 'react';
import {
	Container,
	Grid,
	List,
	ListItem,
	ListItemText,
	makeStyles,
	Typography
} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '..';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase';
import Input from '../components/Input';

const useStyles = makeStyles({
	table: {
		minWidth: 650
	},
	chatSection: {
		width: '100%',
		height: '80vh'
	},
	headBG: {
		backgroundColor: '#e0e0e0'
	},
	borderRight500: {
		borderRight: '1px solid #e0e0e0'
	},
	messageArea: {
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

export const Chat = () => {
	const classes = useStyles();
	const { auth, firestore } = useContext(Context);
	const [user] = useAuthState(auth);
	const [inputValue, setInputValue] = useState('');

	const seconds = new Date().getSeconds();
	const [messages, loading] = useCollectionData(
		firestore.collection('messages').orderBy('createDate')
	);

	const sendMessage = useCallback(async () => {
		const reg = new RegExp('\\S');
		const isJustSpace = !reg.test(inputValue);
		if (!isJustSpace && inputValue.length > 0) {
			try {
				firestore.collection('messages').add({
					uid: user.uid,
					displayName: user.displayName,
					photoURL: user.photoURL,
					text: inputValue,
					createDate: firebase.firestore.FieldValue.serverTimestamp()
				});
				setInputValue('');
			}
			catch (error) {
				console.log(error);
			}
		}
	}, [inputValue]);

	useEffect(() => {
		const chat = document.getElementById('chatsMessages');
		if (chat) chat.scrollTop = 9999999;
	}, [messages]);

	

	if (loading) return <CircularProgress disableShrink />;
	return (
		<Container>
			<Grid container justify={'center'} style={{ marginTop: 16 }}>
				<div
					id="chatsMessages"
					style={{
						width: '100%',
						height: '60vh',
						border: '1px solid gray',
						overflowY: 'auto',
						scrollTop: 999999
					}}
				>
					<List className={classes.messageArea}>
						{messages[0] &&
							messages.map(message => (
								<ListItem key={message.createDate}>
									<Grid
										item
										xs={12}
										align={user.uid === message.uid ? 'right' : 'left'}
									>
										<ListItemText
											className={
												user.uid === message.uid
													? classes.myMessage
													: classes.notmyMessage
											}
											primary={
												<>
													<Typography
														multiline
														component="span"
														variant="body2"
														className={classes.inline}
														color="textPrimary"
													>
														{message.createDate &&
															new Date(message.createDate.seconds*1000+message.createDate.nanoseconds/1000000)
																.toLocaleString()
																.substring(12, 17)}
													</Typography>
													{message.text}
												</>
											}
										></ListItemText>
									</Grid>
								</ListItem>
							))}
					</List>
				</div>
			</Grid>
			<Input value={inputValue} onChange={setInputValue} sendMessage={sendMessage}/>
		</Container>
	);
};
