const newsRouter = require('./news')
const siteRouter = require('./site')
function route (app) {
  app.use('/',siteRouter)
  app.use('/news',newsRouter)
    
  app.post('/search', (req, res) => {
  console.log(req.body)
    res.send('abc')
  })
}

module.exports = route