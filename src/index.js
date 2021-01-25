const path = require('path')
const express = require('express')
const morgan = require('morgan')
const exphbs  = require('express-handlebars');
const app = express()
const port = 3000

//public static
const publicDir = path.join(__dirname,'public')
app.use(express.static(publicDir)); 
//submit form by POST
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

//morgan (HTTP logger)
// app.use(morgan('combined'))

//handlebars (Template engine)
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources\\views'));
//route
app.get('/', (req, res) => {
  res.render('home')
})
app.get('/news', (req, res) => {
  res.render('news')
})
app.get('/search', (req, res) => {
  res.render('search')
})
app.post('/search', (req, res) => {
  console.log(req.body)
  res.send('')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})