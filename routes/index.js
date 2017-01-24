
require('dotenv').load();

var AccessToken = require('twilio').AccessToken;
var VideoGrant = AccessToken.VideoGrant;

var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var randomUsername = require('../models/randos');
const path = require('path');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// const app = express();
var bodyParser = require('body-parser');

var router = express.Router();


router.get('/', function (req, res) {
  res.render('index', { user : req.user });
});

router.get('/register', function(req, res) {
  res.render('register', { });
});

router.get('/react', function(req, res) {
  res.render('react', { });
});

router.get('/search', function(req, res) {
  res.render('userlist', { });

});

router.get('/settings', function(req, res) {
  res.render('setting', { });
});

router.get('/userlist', function(req, res) {
  // res.render('userlist', { });

  Account.find({}, function (err, docs) {
    res.json(docs);
    // console.log(docs);
  });

});

router.get('/token', function(request, response) {
  var identity = request.user.username;

  // Create an access token which we will sign and return to the client,
  // containing the grant we just created
  var token = new AccessToken(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_API_KEY,
      process.env.TWILIO_API_SECRET
  );

  // Assign the generated identity to the token
  token.identity = identity;

  //grant the access token Twilio Video capabilities
  var grant = new VideoGrant();
  grant.configurationProfileSid = process.env.TWILIO_CONFIGURATION_SID;
  token.addGrant(grant);

  // Serialize the token to a JWT string and include it in a JSON response
  response.send({
    identity: identity,
    token: token.toJwt()
  });
});


router.get('/slack-hook', function(req, res) {

  var myJSONStr = 'payload= {"username": "Code Hero Bot", "icon_emoji": ":robot_face:", "channel": "#help-needed", "text": "There is a student in need of help! <http://superman.com|Click here to save them>"}'

  var xmlhttp = new XMLHttpRequest();
  var webhook_url = 'https://hooks.slack.com/services/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';

  xmlhttp.open('POST', webhook_url, false);
  xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xmlhttp.send(myJSONStr);

  res.status(200);
});

router.post('/register', function(req, res) {
  Account.register(new Account({ username : req.body.username , mentor : req.body.mentor , student : req.body.student }), req.body.password, function(err, account) {
    if (err) {
      return res.render('register', { account : account });
    }

    passport.authenticate('local')(req, res, function () {
      res.redirect('/');
    });
  });
});

router.get('/login', function(req, res) {
  res.render('login', { user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

router.get('/ping', function(req, res){
  res.status(200).send("pong!");
});

module.exports = router;