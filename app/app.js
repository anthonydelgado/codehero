/**
 * Created by user on 1/24/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Homework from './components/Homework/Homework';


import descriptions from './components/Homework/Descriptions.js';


import 'brace/mode/javascript';
import 'brace/theme/monokai';

import AceEditor from 'react-ace';


ReactDOM.render(<div>


    <AceEditor
        className="ace-editor"
        mode="javascript"
        theme="monokai"
        enableBasicAutocompletion={true}
        enableEmmet={true}
        name="codeheroeditor"
        width="100%"
        height="calc(100vh - 64px)"
        editorProps={{$blockScrolling: true}}
        defaultValue={ descriptions['04'] }
    />

</div>, document.getElementById('app'));

//
// import React from 'react';
// import { Router, Route, browserHistory } from 'react-router';
// import App from './components/App/App';
// import Login from './components/Login/Login';
// import Homework from './components/Homework/Homework';
//
// export default (
//     <Router history={ browserHistory }>
//         <Route path="/react" component={ App } >
//             <Route path="login" component={ Login } />
//             <Route path="week/:weekId" component={ Homework } />
//         </Route>
//     </Router>
// );