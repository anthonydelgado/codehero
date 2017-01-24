import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';
// import './././public/assets';

class App extends Component {
  render() {

  	const currentRoute = this.props.location.pathname.split('/')[1];

    return (
		<div className="app">
			<AppHeader current={ currentRoute }/>
			{ this.props.children }
			<div><img src={ './assets/bg1.jpeg' } alt="background" className="bg-img"/></div>
    
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
