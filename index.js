//import choo's html helper
const html = require('choo/html')

//import choo
const choo = require('choo')

//import views
const info = require('./views/info.js')
const home = require('./views/home.js')
const gallery = require('./views/gallery.js')
const series = require('./views/series.js')
const wrapper = require('./views/wrapper.js')

//import imageUrlBuilder and client from Sanity and put in constant
const imageUrlBuilder = require('@sanity/image-url')
const client = require('./sanityClient.js')
const builder = imageUrlBuilder(client)

//create app instance
const app = choo()

function randBotMarg() {
  return Math.floor(1 + Math.random()*(100 + 1 - 1))
}

function randWidMarg() {
  return Math.floor(1 + Math.random()*(175 + 1 - 1))
}

function randWidth(){
  return Math.floor(200 + Math.random()*(350 + 1 - 200))
}

function getUrl(source){
  return builder.image(source)
}

app.use((state, emitter) => {

  state.images = []
  state.page = ""

  state.formatImages = function(images){
    return images.map(image => {
      return html`
        <img src=${getUrl(image).width(1250).url()} align="center" style="margin-left: ${randWidMarg()}px; margin-right: ${randWidMarg()}px; margin-bottom: ${randBotMarg()}px" width=${randWidth()}/>
      `
    })
  }

  state.formatCategory = function(array){
    return array.map(group => {
      return state.formatImages(group.photos)
    })
  }

  emitter.on('setImages', (category, name) => {
    fetch(`https://n3f1vhuk.api.sanity.io/v1/data/query/website?query=*[${category} == "${name}"]{title, photos, display_photos}`)
    .then(resp => resp.json())
    .then(resp => {
    console.log(resp)
      state.images = resp.result.map(result => {
        return {title: result.title, display_photos: result.display_photos, photos: result.photos}
      })
      state.page = state.route
      emitter.emit('render')
    })
  })
})


//define routes
app.route('/', wrapper(gallery))
app.route('/info', wrapper(info))
app.route('/commission', wrapper(gallery))
app.route('/personal', wrapper(gallery))
app.route('/series/:series', wrapper(series))

//mount app
app.mount('body')
