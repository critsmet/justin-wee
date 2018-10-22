//import choo's html helper
const html = require('choo/html')

//import choo
const choo = require('choo')

//import views
const info = require('./views/info.js')
const home = require('./views/home.js')
const category = require('./views/category.js')
const series = require('./views/series.js')

//create app instance
const app = choo()

//create store and handle emits
app.use((state, emitter) => {
  state.page = "home"
  state.images = []

  emitter.on('update', (param) => {
    fetch(`https://n3f1vhuk.api.sanity.io/v1/data/query/website?query=*[_type%20==%20%22series%22][0..1]`)
    .then(resp => resp.json())
    .then(resp => state.images = resp)
  })
})

//define routes
app.route('/', home)
app.route('/info', info)
app.route('/commission', category)
app.route('/personal', category)
app.route('/series/:series', series)

//mount app
app.mount('body')
