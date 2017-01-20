import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/App/App';
import Enter from './components/Enter/Enter';

export default (
	<Router history={ browserHistory }>
		<Route path="/" component={ App } >
			<Route path="enter" component={ Enter } />
		</Route>
	</Router>
);