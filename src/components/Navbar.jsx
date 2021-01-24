import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import { Context } from '../index';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Login } from './Login';

const Navbar = props => {
	const { auth, darkState, handleThemeChange } = useContext(Context);
	const [user] = useAuthState(auth);
	return (
		<AppBar color={'default'} position="static">
			<Toolbar>
				<Grid container justify="space-between">
					<Typography variant="h6" color="inherit">
						Anonym Chat
					</Typography>
					<Switch checked={darkState} onChange={handleThemeChange} />
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
