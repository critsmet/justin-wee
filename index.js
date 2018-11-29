//import choo's html helper
const html = require('choo/html')

//import choo
const choo = require('choo')

//import views
const info = require('./views/info.js')
const home = require('./views/home.js')
const commission = require('./views/commission.js')
const personal = require('./views/personal.js')
const series = require('./views/series.js')

//import imageUrlBuilder and client from Sanity and put in constant
const imageUrlBuilder = require('@sanity/image-url')
const client = require('./sanityClient.js')
const builder = imageUrlBuilder(client)

//create app instance
const app = choo()

//define routes
app.route('/', home)
app.route('/info', info)
app.route('/commission', commission)
app.route('/personal', personal)
app.route('/series/:series', series)

//mount app
app.mount('body')
