import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';

class App extends Component {
  render() {

  	const currentRoute = this.props.location.pathname.split('/')[1];

    return (
		<div className="app">
			<AppHeader current={ currentRoute }/>
			<div className="content-wrap">
				{ this.props.children }
			</div>
		</div>
    );
  }
}

const AppHeader = ({
	current
}) => {

	return (
		<div className="app-header">
			<div className="app-header__logo"><Link to="/">CODEHERO</Link></div>
			<div className="app-header__current"><Link to="login">Log In</Link></div>
		</div>
	);
};


export default App;
