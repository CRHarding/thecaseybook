const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('index.ejs');
})

app.listen(3000, (req, res) => {
	console.log("Up and listening on port 3000!");
})