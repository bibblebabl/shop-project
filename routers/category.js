const router = require('express').Router()

const { product: { showProductsByCategory } } = require('../controllers')

const { category: { findCategories } } = require('../middleware')

router.get('/:category', findCategories, showProductsByCategory)

module.exports = router
