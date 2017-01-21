import React from 'react';
// import { Link } from 'react-router';

// import { render } from 'react-dom';
// import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/github';

function onChange(newValue) {
  console.log('change',newValue);
}

const Homework = ({
	params
}) => {
	return (
		<div className="homework">Homework { params.weekId } 
			<AceEditor
			    mode="java"
			    theme="github"
			    onChange={onChange}
			    name="UNIQUE_ID_OF_DIV"
			    editorProps={{$blockScrolling: true}}
			  />

		</div>
			


	);
};



export { Homework as default };