const Router = require('express');
const usersController = require('../controllers/userController.js');

const router = Router();

router.get('/', usersController.usersGetUsers);

router.get('/new', usersController.usersCreateGet);

router.post('/new', usersController.usersCreatePost);

module.exports = router;
