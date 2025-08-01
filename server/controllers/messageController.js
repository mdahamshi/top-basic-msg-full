const db = require('../db/queries.js');

const messagesCreateGet = (req, res) => {
  res.json({
    title: 'Create message',
    message: {},
  });
};

const messagesGetmessages = async (req, res) => {
  const messages = await db.getAllmessages();
  res.json({
    title: 'Create message',
    messages: messages,
  });
};

const messagesCreatePost = async (req, res) => {
  const { messagename } = req.body;
  if (!messagename) throw new Error('No message name provided');

  await db.insertmessagename(messagename);
  res.status(201).json({
    message: 'message created',
    messagename,
  });
};

module.exports = {
  messagesCreateGet,
  messagesGetmessages,
  messagesCreatePost,
};
