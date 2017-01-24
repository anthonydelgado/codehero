// server/app.js
const express = require('express');
const path = require('path');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const app = express();
var bodyParser = require('body-parser');

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Always return the main index.html, so react-router render the route in the client
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.get('/slack-hook', function(req, res) {

	var myJSONStr = 'payload= {"username": "Code Hero Bot", "icon_emoji": ":robot_face:", "channel": "#help-needed", "text": "There is a student in need of help! <http://localhost:9000|Click here to save them>"}'

  	var xmlhttp = new XMLHttpRequest();
    var webhook_url = 'https://hooks.slack.com/services/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';
        
    xmlhttp.open('POST', webhook_url, false);
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xmlhttp.send(myJSONStr);

    res.status(200);
});

module.exports = app;