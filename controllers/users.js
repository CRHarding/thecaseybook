const users = require('../users');
const User = require('../models').User;
const Post = require('../models').Post;

const index = (req, res) => {
	User.findAll().then(users => {
		res.render('users/index.ejs', { users: users });
	})
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
	User.findByPk(req.params.id, {
		include: [{
			model: Post,
			attributes: ['id', 'title', 'content']
		}]
	})
	.then(user => {
		console.log(user)
		res.render('users/profile.ejs', { user })
	})
}

module.exports = {
	index,
	signup,
	createUser,
	show
}