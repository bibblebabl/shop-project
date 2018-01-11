module.exports = {
  showMain(req, res) {
    res.render('index', {
      id: 'main',
      title: 'Главная страница магазина'
    })
  }
}
