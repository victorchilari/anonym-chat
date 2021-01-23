import React, { useCallback, useContext, useState } from 'react';
import { Button, Container, Grid, TextField } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '..';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase';

export const Chat = () => {
	const { auth, firestore } = useContext(Context);
	const [user] = useAuthState(auth);
	const [value, setValue] = useState('');
	const [messages, loading] = useCollectionData(
		firestore.collection('messages').orderBy('createDate')
	);

	const sendMessage = useCallback(async () => {
		if (value.length > 0) {
			console.log(value);
			firestore.collection('messages').add({
				uid: user.uid,
				displayName: user.displayName,
				photoURL: user.photoURL,
				text: value,
				createDate: firebase.firestore.FieldValue.serverTimestamp()
			});
			setValue('');
		}
	}, [value]);
	console.log('rerender');

	const keyPress = e => {
		if (e.keyCode === 13) {
			sendMessage();
		}
	};

	if (loading) return <CircularProgress disableShrink />;
	return (
		<Container>
			<Grid container justify={'center'} style={{ marginTop: 16 }}>
				<div
					style={{
						width: '100%',
						height: '60vh',
						border: '1px solid gray',
						overflowY: 'auto'
					}}
				>
					{messages.map(message => (
						<div
							style={{
								border:
									user.uid === message.uid
										? '2px solid green'
										: '2px solid red',
								marginLeft: user.uid === message.uid ? 'auto' : '10px',
								width: 'fit-content',
								padding: 5
							}}
						>
							<Grid container>{message.text}</Grid>
						</div>
					))}
				</div>
			</Grid>
			<Grid
				container
				// direction="column"
				// alignItems="flex-end"
				// style={{ width: '80%' }}
			>
				<TextField
					fullWidth
					onKeyUp={keyPress}
					rowsMax={2}
					variant="outlined"
					style={{ width: '90%' }}
					value={value}
					onChange={e => setValue(e.target.value)}
				></TextField>
				<Button
					onClick={sendMessage}
					fullWidth
					style={{ width: '10%' }}
					variant="outlined"
				>
					Send
				</Button>
			</Grid>
		</Container>
	);
};
