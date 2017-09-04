// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.



app.route('/').get(function (req, res) {
  res.send({
    ipaddress: req.headers['x-forwarded-for'].split(',')[0] || false,
    language: req.headers['accept-language'].split(',')[0] || false,
    software: /\((.*?)\)/.exec(req.headers['user-agent'])[1] || false
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

app.route('/')
    .get(function(req, res) {
		  res.sendFile(process.cwd() + '/views/index.html');
    })
