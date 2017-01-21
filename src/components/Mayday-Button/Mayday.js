import React from 'react';
import axios;
import './Mayday.css';
import { Input, Button, Row, Col } from 'react-materialize';
import { browserHistory } from 'react-router';
// react-router Link

const Mayday = () => {
	return (
		<div className="mayday">
			<Button onClick={ () => { yellMayday() } } waves='light'>Get Help!</Button>
		</div>	
	);

	function yellMayday() {
		axios({
		  method: 'post',
		  url: 'https://hooks.slack.com/services/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',
		  data: {
		    "text":"This is a line of text.\nAnd this is another one."
		  }
		});

		console.log('Mayday button clicked');
	}
};

export { Mayday as default };