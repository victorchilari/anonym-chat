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

export const Context = createContext(null);

ReactDOM.render(
	<Context.Provider
		value={{
			firebase,
			auth,
			firestore
		}}
	>
		<App />
	</Context.Provider>,
	document.getElementById('root')
);
