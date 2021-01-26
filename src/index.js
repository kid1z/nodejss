const path = require('path')
const express = require('express')
const morgan = require('morgan')
const exphbs  = require('express-handlebars');
const app = express()
const port = 3000

//import route
const route = require('./routes')

//public static
const publicDir = path.join(__dirname,'public')
app.use(express.static(publicDir)); 
//submit form by POST ( body-parser)
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

//morgan (HTTP logger)
// app.use(morgan('combined'))

//handlebars (Template engine)
app.engine('.hbs', exphbs({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'resources\\views'))


//route
route(app)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})