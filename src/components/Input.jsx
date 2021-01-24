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
				onKeyDown={keyPress}
				onKeyUp={keyPress}
				multiline
				variant="outlined"
				style={{ width: '90%' }}
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
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
	);
};

export default Input;
