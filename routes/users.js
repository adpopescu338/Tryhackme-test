var express = require('express');
var router = express.Router();
var mongo = require('../lib/mongo');
const {userModel} = require('../lib/model')

/* GET users listing. */
//Also added filters here. I don't know if I was supposed to do it in a separate API but since it was a few lines, I put it here
router.get('/', async (req, res) => {
	const query = {};
	if (req.query.spokenLanguages) query.spokenLanguages = { $all: req.query.spokenLanguages };
	if (req.query.location) query.location = { $in: req.query.location };

	const collection = await mongo('users', 'users');
	const users = await collection.find(query, userModel).toArray();
	res.send(users);
});

module.exports = router;
