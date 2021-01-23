import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Context } from '../index';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Login } from './Login';

const Navbar = () => {
	const { auth } = useContext(Context);
	const [user] = useAuthState(auth);
	return (
		<AppBar color={'default'} position="static">
			<Toolbar>
				{/* <IconButton edge="start" color="inherit" aria-label="menu">
					<img
						width="20px"
						src="https://www.flaticon.com/svg/vstatic/svg/1828/1828859.svg?token=exp=1611328464~hmac=63e10be00d4ca211f97f06e3fb2c32dc"
					/>
				</IconButton> */}
				<Grid container justify="space-between">
					<Typography variant="h6" color="inherit">
						Anonym Chat
					</Typography>
					{user ? (
						<Button
							variant="outlined"
							color="secondary"
							onClick={() => auth.signOut()}
						>
							Logout
						</Button>
					) : (
						<Login auth={auth} />
					)}
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;

// {
// 	user ? (
// 		<Button variant="outlined" color="secondary" onClick={() => auth.signOut()}>
// 			Logout
// 		</Button>
// 	) : (
// 		<NavLink to={LOGIN_ROUTE}>
// 			<Button variant="outlined" color="primary">
// 				Login
// 			</Button>
// 		</NavLink>
// 	);
// }
