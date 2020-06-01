var express = require('express')//import express
var router = express.Router()

const sequelize = require('../db')
// const posts = sequelize.import('../models/posts')

const validateSession = require('../middleware/validate-session')
