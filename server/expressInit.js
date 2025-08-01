// expressInit.js
const express = require('express');
const path = require('path');
const cors = require('cors');

function initExpressApp(app) {
  // Locals
  app.locals.appName = 'SaraWebs PostgreSQL';
  app.locals.links = [
    { href: '/', text: 'Home' },
    { href: '/new', text: 'Create User' },
  ];
  app.use(cors());

  // Body parsers
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  // Logger
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    req.body ? console.log(req.body) : '';
    next();
  });
  // Static files
  const clientBuildPath = path.resolve(__dirname, '../client/dist');
  app.use(express.static(clientBuildPath));
}

module.exports = initExpressApp;
