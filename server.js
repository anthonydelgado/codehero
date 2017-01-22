var express = require('express');
var axios = require('axios');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3005;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.get('/', function(req,res) {
	res.sendFile(path.join(__dirname, "/test.html"))
});

app.post('/slack-hook', function(req, res) {
	axios.defaults.headers.post['Content-Type'] = 'application/json';
	// var config = {
 //  		headers: {'Content-Type': 'application/json'}
	// };
	axios.post('hooks.slack.com/services/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', {"text":"Help Me Obi Wan Code Obi.\nYou're my only hope."}).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });;
  	req.end()

});

//   	axios({
//   method: 'POST',
//   url: 'hooks.slack.com/services/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', data: 'payload=%7B%22text%22%3A%22This%20is%20a%20line%20of%20text.%5CnAnd%20this%20is%20another%20one.%22%7D'
// }).then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

  
  	
	




app.listen(PORT, function() {
	console.log("App Listening on Port " + PORT);
});