const db = require('../db/queries.js');

const usersCreateGet = (req, res) => {
  res.json({
    title: 'Create user',
    user: {},
  });
};

const usersGetUsers = async (req, res) => {
  const messages = await db.getAllUsernames();
  res.json({
    title: 'Create user',
    users: usernames,
  });
};

const usersCreatePost = async (req, res) => {
  const { username } = req.body;
  if (!username) throw new Error('No user name provided');

  await db.insertUsername(username);
  res.status(201).json({
    message: 'User created',
    username,
  });
};

module.exports = {
  usersCreateGet,
  usersGetUsers,
  usersCreatePost,
};
