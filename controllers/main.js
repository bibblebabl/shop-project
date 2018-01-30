module.exports = {
  showMain(req, res) {
    console.log(req.session)
    res.render('index', {
      id: 'main',
      title: 'Главная страница магазина'
    })
  }
}
