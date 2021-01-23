import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import { Context } from '../index';
import { useAuthState } from 'react-firebase-hooks/auth';

const AppRouter = () => {
	const { auth } = useContext(Context);
	const [user] = useAuthState(auth);

	const routes = user
		? privateRoutes.map(({ path, Component }) => (
				<Route key={path} path={path} component={Component} exact={true} />
		  ))
		: publicRoutes.map(({ path, Component }) => (
				<Route key={path} path={path} component={Component} exact={true} />
		  ));
	console.log(routes);
	return (
		<Switch>
			{routes}
			<Redirect to="/" />
		</Switch>
	);
};

export default AppRouter;
