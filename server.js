const express = require('express');
const app = express();

app.listen(3000, (req, res) => {
	console.log("Up and listening on port 3000!");
})