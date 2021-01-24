import React, { useCallback, useContext, useEffect, useState } from 'react';
import { makeStyles, Container } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '..';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase';
import Input from '../components/Input';
import Messages from '../components/Messages';
import ChatStyle from '../Styles/ChatStyle';

// const useStyles = makeStyles({
// 	table: {
// 		minWidth: 650
// 	},
// 	chatSection: {
// 		width: '100%',
// 		height: '80vh'
// 	},
// 	headBG: {
// 		backgroundColor: '#e0e0e0'
// 	},
// 	borderRight500: {
// 		borderRight: '1px solid #e0e0e0'
// 	}
// });

export const Chat = () => {
	const classes = ChatStyle();
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
			} catch (error) {
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
			<Messages uid={user.uid} messages={messages} />
			<Input
				value={inputValue}
				setValue={setInputValue}
				sendMessage={sendMessage}
			/>
		</Container>
	);
};
