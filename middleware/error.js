module.exports = {
  notFound(req, res, next) {
    let error = new Error('Не найдено')
    error.status = 404

    next(error)
  },

  csrf(err, req, res, next) {
    if (err.code !== 'EBADCSRFTOKEN') return next(err)

    // handle CSRF token errors here
    res.status(403)
    res.send('form tampered with')
  },

  development(error, req, res, next) {
    res.render('error', {
      id: 'error',
      title: 'Ошибка',
      error
    })
  },

  production(error, req, res, next) {
    res.render('error', {
      id: 'error',
      title: 'Ошибка',
      message: error.message
    })
  }
}
