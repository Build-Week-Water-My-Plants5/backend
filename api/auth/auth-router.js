const router = require('express').Router();
const Users = require('../users/users-model');
const bcrypt = require('bcryptjs');
const tokenBuilder = require('./token-builder');
const {
	checkUsernameExists,
	checkUsernameFree,
	noMissingInformation,
	noMissingCredentials
} = require('./auth-middleware');


router.post("/register",
	noMissingInformation,
	checkUsernameFree,
	(req, res, next) => {
		const user = req.body;
		const rounds = process.env.BCRYPT_ROUNDS || 8;
		const hash = bcrypt.hashSync(user.password, rounds);
		user.password = hash;

		Users.add(user)
			.then(addedUser => {
				res.status(201).json(addedUser);
			})
			.catch(next);
	});

router.post("/login",
	noMissingCredentials,
	checkUsernameExists,
	(req, res) => {
		const { username, password } = req.body;
		if (bcrypt.compareSync(password, req.user.password)) {
			const token = tokenBuilder(req.user)
			const { user_id } = req.user;
			res.status(200).json({ message: `Welcome ${username}!`, user_id, token })
		} else {
			res.status(401).json({ message: "Invalid credentials" })
		}
	})

module.exports = router;