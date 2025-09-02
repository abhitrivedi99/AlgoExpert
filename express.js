const express = require('express');

const app = express();

app.app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(3000, (err) => {
	if (err) throw new Error(err);
	console.log('Server running on port 3000');
});
