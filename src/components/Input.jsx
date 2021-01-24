import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '..';
import firebase from 'firebase';

const Input = () => {
	const { auth, firestore } = useContext(Context);
	const [user] = useAuthState(auth);

	const [inputValue, setInputValue] = useState('');
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
			} catch (error) {
				console.log(error);
			}
		}
	}, [inputValue]);

	const keyPress = e => {
		if (e.keyCode === 13) sendMessage();
	};

	return (
		<Grid container>
			<TextField
				defaultValue=""
				fullWidth
				// onKeyDown={keyPress}
				onKeyUp={keyPress}
				multiline="true"
				variant="outlined"
				style={{ width: '80%' }}
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
			></TextField>
			<Button
				onClick={sendMessage}
				color="primary"
				fullWidth
				style={{ width: '10%' }}
				variant="outlined"
			>
				Send
			</Button>
			<Button
				onClick={() => {
					firestore
						.collection('messages')
						.get()
						.then(res => {
							res.forEach(element => {
								element.ref.delete();
							});
						});
				}}
				type="button"
				color="secondary"
				fullWidth
				style={{ width: '10%' }}
				variant="outlined"
			>
				Erase
			</Button>
		</Grid>
	);
};

export default Input;
