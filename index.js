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
  state.page = ""
  state.images = []

  emitter.on('setImages', (category, name) => {
    fetch(`https://n3f1vhuk.api.sanity.io/v1/data/query/website?query=*[${category} == "${name}"]{title, photos, display_photos}`)
    .then(resp => resp.json())
    .then(resp => {
      console.log(resp)
      state.images = resp.result.map(result => {
        return {title: result.title, display_photos: result.display_photos, photos: result.photos}
      })
      emitter.emit('render')
    })
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
