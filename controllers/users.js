const User = require('../models').User;
const Post = require('../models').Post;
const Team = require('../models').Team;

const index = (req, res) => {
	User.findAll().then(users => {
		res.render('users/index.ejs', { users: users });
	})
}

const renderSignup = (req, res) => {
    res.render('users/signup.ejs')
}

const createUser = (req, res) => {
    if (!req.body.img) {
        req.body.img = "https://i.pinimg.com/originals/2c/3f/d7/2c3fd77862947349f29dc9a08d66ce7f.jpg";
    }
    User.create(req.body)
    .then(newUser => {
        res.redirect(`/users/profile/${newUser.id}`);
    }).catch(err => console.error(err))
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
	User.findByPk(req.params.id, {
        include: [{
            model: Post,
            attributes: ['id', 'title', 'content']
        }, {
            model: Team,
            attributes: ['name', 'cost']
        }]
    })
	.then(user => {
        const joinedTeams = [];
        Team.findAll().then(allTeams => {
            for (let i = 0; i < allTeams.length; i++) {
                for (let j = 0; j < user.Teams.length; j++) {
                    if (allTeams[i].name === user.Teams[j].dataValues.name) {
                        allTeams.splice(i, 1);
                    }
                }
            }
            res.render('users/profile.ejs', { user, allTeams })
        })
	}).catch(err => console.error(err))
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

const addTeam = (req, res) => {
    User.findByPk(req.body.userId).then(user => {
        Team.findByPk(req.body.teamId).then(team => {
            user.addTeam(team);
            res.redirect(`/users/profile/${req.body.userId}`);
        })
    })
}

const addPost = (req, res) => {
    Post.create(req.body).then(newPost => {
        res.redirect(`/users/profile/${req.body.userId}`);
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
	show,
    addTeam,
    addPost
}