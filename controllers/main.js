module.exports = {
  showMain(req, res, next) {
    res.render('index', {
      id: 'main',
      title: 'Главная страница магазина'
    })
  }
}
