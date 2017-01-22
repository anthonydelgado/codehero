import React from 'react';
// import { Link } from 'react-router';

// import { render } from 'react-dom';
// import brace from 'brace';
var Mayday = require("../Mayday-Button/Mayday.js");
import {Button} from 'react-materialize';
// import '../Mayday-Button/Mayday.js';
import axios from 'axios';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/github';

function onChange(newValue) {
  console.log('change',newValue);
}

// function yellMayday() {
// 		axios({
// 		  method: 'post',
// 		  url: 'https://hooks.slack.com/services/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',
// 		  data: {
// 		    "text":"This is a line of text.\nAnd this is another one."
// 		  }
// 		});

// 		console.log('Mayday button clicked');
// 	}

function yellMayday() {
		axios.post('/slack-hook', {
			studentName: "Jo",
			weekNumber: 'Week 3'
		})

		console.log('Mayday button clicked');
	} 


const Homework = ({
	params
}) => {
	return (
		<div>
			<div className="mayday">
				<Button onClick={ () => { yellMayday() } } waves='light'>Get Help!</Button>
			</div>	
			<div className="homework">Homework { params.weekId } 
				<AceEditor
				    mode="java"
				    theme="github"
				    onChange={onChange}
				    name="UNIQUE_ID_OF_DIV"
				    editorProps={{$blockScrolling: true}}
				  />

			</div>
		</div>
	);
};



export { Homework as default };