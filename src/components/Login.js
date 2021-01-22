import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { Context } from '../index';
import firebase from 'firebase';

export const Login = () => {
	const { auth } = useContext(Context);

	const login = async () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		const { user } = await auth.signInWithPopup(provider);
		console.log(user);
	};

	return (
		<div className="">
			<Button variant="contained" color="primary" type="submit" onClick={login}>
				Logare
			</Button>
		</div>
	);
};
