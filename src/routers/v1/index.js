const express = require('express')
const infoRouter = require('./info-router')
const router = express.Router()

router.use('/info', infoRouter)

module.exports = router
