const categories = require('../data/categories').sort((current, next) => {
  if (current.id === next.id)
    return 0
  if (current.id > next.id)
    return 1
  if (current.id < next.id)
    return 0
})

module.exports = {
  findCategories(req, res, next) {
    req.categories = categories
    req.topic = categories.find(category => category.id === req.params.category)

    res.locals.categories = categories
    res.locals.currentTopic = req.topic

    next()
  }
}
