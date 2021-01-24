import React, { useContext, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './pages/AppRouter';
import Navbar from './components/Navbar';
import { Context } from './index';
import { useAuthState } from 'react-firebase-hooks/auth';
import CircularProgress from '@material-ui/core/CircularProgress';

import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './Styles/Theme';
import {
	lightBlue,
	orange,
	deepOrange,
	deepPurple
} from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core';

function App() {
	const { auth } = useContext(Context);
	const [user, loading, error] = useAuthState(auth);

	const [darkState, setDarkState] = useState(false);
	const palletType = darkState ? 'dark' : 'light';
	const mainPrimaryColor = darkState ? orange[500] : lightBlue[500];
	const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];
	// const darkTheme = createMuiTheme({
	// 	palette: {
	// 		type: palletType,
	// 		primary: {
	// 			main: mainPrimaryColor
	// 		},
	// 		secondary: {
	// 			main: mainSecondaryColor
	// 		}
	// 	}
	// });
	const theme = Theme.darkTheme;
	const handleThemeChange = () => {
		setDarkState(!darkState);
	};
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Navbar darkState={darkState} handleThemeChange={handleThemeChange} />
				{loading ? <CircularProgress disableShrink /> : <AppRouter />}
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
