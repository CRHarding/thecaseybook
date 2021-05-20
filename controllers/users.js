const users = require('../models/users');

const index = (req, res) => {
	res.render('users/index.ejs', { users: users });
}

const signup = (req, res) => {
	res.render('users/signup.ejs');
}

const createUser = (req, res) => {
	const uuid = new Date().valueOf();
	req.body.uuid = uuid;
	users.push(req.body);
	res.redirect('/users')
}

const show = (req, res) => {
	for (let i = 0; i < users.length; i++) {
		console.log(users[i].uuid)
		console.log(req.params.id)
		if (parseInt(users[i].uuid) === parseInt(req.params.id)) { // 12345 === "12345"
			res.render('users/profile.ejs', { user: users[i] });
		}
	}
}

module.exports = {
	index,
	signup,
	createUser,
	show
}