// guest.js
const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

// Generate a unique identifier for guest users
function generateGuestId(req) {
  const ip = req.ip;
  const userAgent = req.headers['user-agent'];
  const fingerprint = `${ip}:${userAgent}`;
  return fingerprint;
}