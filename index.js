//import choo's html helper
const html = require('choo/html')

//import choo
const choo = require('choo')

//import views
const info = require('./views/info.js')
const home = require('./views/home.js')
const category = require('./views/category.js')
const series = require('./views/series.js')

const app = choo()

app.route('/', home)
app.route('/info', info)
app.route('/commission', category)
app.route('/personal', category)
app.route('/series/:series', series)

app.mount('body')
