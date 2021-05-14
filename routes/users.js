const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/profile', ctrl.users.index);
router.get('/signup', ctrl.users.signup);
router.post('/signup', ctrl.users.createUser);

module.exports = router;