var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var app = express();
var PORT = process.env.PORT || 3005;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.get('/', function(req,res) {
	res.sendFile(path.join(__dirname, "/public/index.html"))
});

app.get('/slack-hook', function(req, res) {

	var myJSONStr = 'payload= {"username": "Code Hero Bot", "icon_emoji": ":robot_face:", "channel": "#help-needed", "text": "There is a student in need of help! <http://localhost:3005|Click here to save them>"}'

  	var xmlhttp = new XMLHttpRequest();
    var webhook_url = 'https://hooks.slack.com/services/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';
        
    xmlhttp.open('POST', webhook_url, false);
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xmlhttp.send(myJSONStr);

    res.status(200);
});
  
app.listen(PORT, function() {
	console.log("App Listening on Port " + PORT);
});
