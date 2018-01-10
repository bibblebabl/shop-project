const express = require('express')
const router = express.Router()

const {
  profile: {
    showProfile
  }
} = require('../controllers')

router.get('/', showProfile)

module.exports = router
