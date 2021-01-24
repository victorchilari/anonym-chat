import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './pages/AppRouter';
import Navbar from './components/Navbar';

function App() {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Navbar />
			<AppRouter />
		</BrowserRouter>
	);
}

export default App;
