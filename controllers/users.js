const User = require('../models').User;
const Post = require('../models').Post;


const index = (req, res) => {
	User.findAll().then(users => {
		res.render('users/index.ejs', { users: users });
	})
}

const renderSignup = (req, res) => {
    res.render('users/signup.ejs')
}

const createUser = (req, res) => {
    User.create(req.body)
    .then(newUser => {
        res.redirect(`/users/profile/${newUser.id}`);
    })
}

const renderLogin = (req, res) => {
    res.render('users/login.ejs')
}

const login = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    })
    .then(foundUser => {
        res.redirect(`/users/profile/${foundUser.id}`);
    })
}

const show = (req, res) => {
	User.findByPk(req.params.id)
	.then(user => {
		res.render('users/profile.ejs', { user })
	})
}

const editProfile = (req, res) => {
    User.update(req.body, {
        where: {
            id: req.params.index
        },
        returning: true
    })
    .then(updatedUser => {
        res.redirect(`/users/profile/${req.params.index}`);
    })
}

const deleteUser = (req, res) => {
    User.destroy({
        where: {
            id: req.params.index
        }
    })
    .then(() => {
        res.redirect('/users');
    })
}



module.exports = {
	index,
	renderSignup,
	renderLogin,
	login,
	deleteUser,
	editProfile,
	createUser,
	show
}