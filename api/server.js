const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const authRouter = require("./auth/auth-router")
const usersRouter = require("./users/users-router.js") 
const plantsRouter = require("./plants/plants-router")
const session = require('express-session')
const store = require('connect-session-knex')(session)

const server = express()

// server.use(
// 	session({
// 		name: 'Dopey',
// 		secret: '*hiccup*',
// 		cookie: {
// 			maxAge: 1 * 24 * 60 * 60 * 1000,
// 			secure: false,
// 			httpOnly: true,
// 		},
// 		resave: false,
// 		saveUninitialized: false,

// 		store: new store({
// 			knex: require('./data/config'),
// 			tablename: 'sessions',
// 			sidfieldname: 'sid',
// 			createtable: true,
// 			clearInterval: 1000 * 60 * 60,
// 		}),
// 	}))


server.use(express.json())
server.use(helmet())
server.use(cors())

server.use("/api/users", usersRouter);
server.use("/api/auth", authRouter);
server.use("/api/plants", plantsRouter);

server.get("/", (req, res) => {
	res.json({ api: "up" });
})

server.use((err, req, res, next) => { // eslint-disable-line
	res.status(err.status || 500).json({
		message: err.message,
		stack: err.stack,
	})
})

module.exports = server