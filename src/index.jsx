import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firebase';
import 'firebase/auth';
import { firebaseKEYS } from './utils/private';

firebase.initializeApp(firebaseKEYS);

const auth = firebase.auth();
const firestore = firebase.firestore();

const deleteMessages = (e = 0) => {
	const howMuch = [4, 5, 6];
	let index = 0;
	firestore
		.collection('messages')
		.get()
		.then(res => {
			console.log(res);
			res.forEach(element => {
				console.log(element, index);
				// e = e - 1;
				// index > howMuch
				index++;
				// howMuch.includes(index) && e < 3 && e > 0 &&
				howMuch.includes(index) && element.ref.delete();
			});
		});
	// .then((index = 0));
};

export const Context = createContext(null);

ReactDOM.render(
	<Context.Provider
		value={{
			auth,
			firebase,
			firestore,
			deleteMessages
		}}
	>
		<App />
	</Context.Provider>,
	document.getElementById('root')
);
