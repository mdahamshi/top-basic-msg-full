const messagesRoutes = require('./messages.js');

function registerRoutes(app) {
  app.use('/messages', messagesRoutes);
}

module.exports = registerRoutes;
