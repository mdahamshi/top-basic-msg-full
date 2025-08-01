const Router = require('express');
const messagesController = require('../controllers/messageController.js');

const router = Router();

router.get('/messages', messagesController.messagesGetmessages);

router.get('/new', messagesController.messagesCreateGet);

router.post('/new', messagesController.messagesCreatePost);

router.delete('/messages/:id', messagesController.messageDelete);

router.put('/messages/:id', messagesController.messageUpdate);

module.exports = router;
