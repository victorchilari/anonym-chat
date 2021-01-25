import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '..';
import firebase from 'firebase';

const Input = () => {
	// const [resData, setResData] = useState('');

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
				onClick={async () => {
					let del = 4;
					const firestore1 = await firestore.collection('messages');
					const take = await firestore1.get();
					take.forEach(element => {
						console.log('res', element);
						// const str = JSON.stringify(element.ref.firestore._.id);
						// const str2 = resData.concat(str);
						// setResData(element.ref.firestore._.id);
						// setResData(str2);
						// console.log('data', resData);
						console.log('id', element.id);
						const pseudoID = element.id;
						element != undefined &&
							pseudoID &&
							element.id === pseudoID &&
							element.ref.delete();
						del = del - 1;
						for (let index = 0; index < 60000000; index++) {
							const a = index;
						}
					});
					// .then(res => {
					// 		res.forEach(element => {
					// 			element.ref.delete();
					// 		});
					// 	});
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
