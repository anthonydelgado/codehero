import React from 'react';
// var axios = require('axios');
import axios from 'axios';
import './Mayday.css';
import {Button} from 'react-materialize';
import { browserHistory } from 'react-router';
// react-router Link

// class Mayday extends React.Component {
	// constructor(props) {
 //    	super(props);
 //  	}

// const Mayday = () => {
// 		return (
// 			<div className="mayday">
// 				<Button onClick={ () => { yellMayday() } } waves='light'>Get Help!</Button>
// 			</div>	
// 		);
	
// 	function yellMayday() {
// 		axios({
// 		  method: 'post',
// 		  url: 'https://hooks.slack.com/services/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',
// 		  data: {
// 		    "text":"This is a line of text.\nAnd this is another one."
// 		  }
// 		});

// 		console.log('Mayday button clicked');
// 	}
// };

// export { Mayday as default };
// export default Mayday;

const Mayday = () => {
function yellMayday() {
		axios({
		  method: 'post',
		  url: 'https://hooks.slack.com/services/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',
		  data: {
		    "text":"This is a line of text.\nAnd this is another one."
		  },
		  headers : {
        	"Content-Type" : "application/json"
      	  }
		});

		console.log('Mayday button clicked');
	}

	return (
		<div className="mayday">
			<Button onClick={ () => { yellMayday() } } waves='light'>Get Help!</Button>
		</div>	
	);

	
};

export { Mayday as default };


