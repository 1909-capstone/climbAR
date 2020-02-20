const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use('/api', require('./api'));

app.use(express.static(path.join(__dirname, '../public')));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});


//Error-handling endware
app.use('/', (err, req, res, next) => {
	res
		.status(err.status || 500)
		.send({ message: err.message } || 'Internal server error');
});

module.exports = app;