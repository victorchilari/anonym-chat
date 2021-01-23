import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './pages/AppRouter';
import Navbar from './components/Navbar';
import { Context } from './index';
import { useAuthState } from 'react-firebase-hooks/auth';
import CircularProgress from '@material-ui/core/CircularProgress';

function App() {
	const { auth } = useContext(Context);
	const [user, loading, error] = useAuthState(auth);

	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Navbar />
			{loading ? <CircularProgress disableShrink /> : <AppRouter />}
		</BrowserRouter>
	);
}

export default App;
