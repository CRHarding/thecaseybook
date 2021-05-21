const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.users.index);
router.get('/signup', ctrl.users.renderSignup);
router.post('/signup', ctrl.users.createUser);
router.post('/addteam', ctrl.users.addTeam);
router.get('/profile/:id', ctrl.users.show);

module.exports = router;