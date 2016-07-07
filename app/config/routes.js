import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from '../components/Main';

var routes = (
	<Router history={hashHistory}>
		<Route path="/" component={Main} />
	</Router>
);

export default routes;