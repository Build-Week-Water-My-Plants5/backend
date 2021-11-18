const router = require("express").Router()
const Users = require("./users-model.js")
const bcrypt = require("bcryptjs")
const { checkUserExists } = require('./users-middleware')

router.get("/", (req, res, next) => {
	Users.get()
		.then(usersList => {
			res.status(200).json(usersList)
		})
		.catch(next)
});

router.get("/:id", (req, res, next) => {
	const { id } = req.params
	Users.getById(id)
		.then(currentUser => {
			res.status(200).json(currentUser)
		})
		.catch(next)
})

router.get("/:id/plants", checkUserExists, (req, res, next) => {
	const { id } = req.params
	Users.getUserPlants(id)
		.then(selectedUser => {
			res.status(200).json(selectedUser)
		})
		.catch(next)
})

router.put("/:id", checkUserExists, (req, res, next) => {
	const { id } = req.params
	const user = req.body;
	const rounds = process.env.BCRYPT_ROUNDS || 8;
	const hash = bcrypt.hashSync(user.password, rounds);
	user.password = hash;
	Users.update(id, {
		username: user.username,
		password: hash,
		phone_number: user.phone_number
	})
		.then(() => {
			res.status(200).json({ message: "User info updated" })
		})
		.catch(() => {
			res.status(500).json({ message: "Invalid change." })
		})
})

module.exports = router