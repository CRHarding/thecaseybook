const users = require('../models/users');

const index = (req, res) => {
	res.render('users/index.ejs', { users: users });
}

const signup = (req, res) => {
	res.render('users/signup.ejs');
}

module.exports = {
	index,
	signup
}