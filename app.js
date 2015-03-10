#!/usr/bin/env node
var bodyParser = require('body-parser');
var express = require('express');
var stormpath = require('express-stormpath');

var app = express();

// Settings
app.set('view engine', 'jade');

// Middleware
app.use(bodyParser.json());
app.use(stormpath.init(app, {
  apiKeyId: 'xxx',
  apiKeySecret: 'xxx',
  application: 'https://api.stormpath.com/v1/applications/xxx',
  enableRegistration: false
}));

// This function will render a registration page.
app.get('/register', function(req, res) {
  res.render('register');
});

// This function will create a new user given email, password, givenName and
// surname from a JSON POST request.
app.post('/register', function(req, res) {
  if (!req.body.email || !req.body.password || !req.body.givenName || !req.body.surname) {
    return res.json({ error: 'email, password, givenName and surname are required.' });
  }

  app.get('stormpathApplication').createAccount({
    email: req.body.email,
    password: req.body.password,
    givenName: req.body.givenName,
    surname: req.body.surname
  }, function(err, account) {
    if (err) {
      return res.json({ error: err.userMessage });
    }

    // Create the server-side session details.
    req.session.user = account.href;
    res.locals.user = account;
    req.user = account;

    return res.json({
      givenName: account.givenName,
      surname: account.surname,
      email: account.email
    });
  });
});

app.get('/test', stormpath.loginRequired, function(req, res) {
  res.send('you are logged in: ' + req.user.givenName);
});

app.listen(3000);
