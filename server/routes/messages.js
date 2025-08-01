const Router = require('express');
const messagesController = require('../controllers/messageController.js');

const router = Router();

router.get('/', messagesController.messagesGetmessages);

router.get('/new', messagesController.messagesCreateGet);

router.post('/new', messagesController.messagesCreatePost);

module.exports = router;
