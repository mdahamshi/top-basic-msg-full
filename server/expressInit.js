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
  // Logger
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });

  // Body parsers
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Static files
  const clientBuildPath = path.resolve(__dirname, '../client/dist');
  app.use(express.static(clientBuildPath));
}

module.exports = initExpressApp;
