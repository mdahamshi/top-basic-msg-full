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
  const message = req.body;
  if (!message) throw new Error('No message name provided');
  try {
    await db.insertmessagename(message);
  } catch (err) {
    throw new Error('Error while creating message:' + err);
  }
  res.status(201).json({
    message: 'message created',
  });
};

const messageDelete = async (req, res) => {
  const messageId = req.params.id;
  if (!messageId) throw new Error('No message name provided');
  try {
    await db.deletMessage({ id: messageId });
  } catch (err) {
    throw new Error('Error while deleting message:' + err);
  }
  res.status(200).json({
    message: 'message deleted',
    id: messageId,
  });
};
const messageUpdate = async (req, res) => {
  const { id } = req.params;
  const { name, text } = req.body;

  if (!id || !name || !text) throw new Error('Failed to update message');
  try {
    await db.updateMessage({ id, name, text });
  } catch (err) {
    throw new Error('Error while deleting message:' + err);
  }
  res.status(200).json({
    message: 'message updated',
    id,
  });
};

module.exports = {
  messagesCreateGet,
  messagesGetmessages,
  messagesCreatePost,
  messageDelete,
  messageUpdate,
};
