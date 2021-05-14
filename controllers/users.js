const users = require('../models/users');

const index = (req, res) => {
	res.render('users/index.ejs', { users: users });
}

module.exports = {
	index
}