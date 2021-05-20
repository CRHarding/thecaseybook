const Post = require('../models').Post;

const index = (req, res) => {
	Post.findAll().then(allPosts => {
		console.log(allPosts);
	})
}