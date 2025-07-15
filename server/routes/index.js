const express = require('express')
const router = express.Router()

const userRoutes = require('./user')
const absenceRoutes = require('./absence')

router.use('/user', userRoutes)
router.use('/absence', absenceRoutes)

module.exports = router