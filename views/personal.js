//import choo's template helper
const html = require('choo/html')

//import imageUrlBuilder and client from Sanity and put in constant
const imageUrlBuilder = require('@sanity/image-url')
const client = require('../sanityClient.js')
const builder = imageUrlBuilder(client)

//import document ready
const ready = require('document-ready')

//import wrapper
const wrapper = require('./wrapper.js')
//get urls
function getUrl(source){
  return builder.image(source)
}

//random margin & width
function randBotMarg() {
  return Math.floor(1 + Math.random()*(100 + 1 - 1))
}

function randWidMarg() {
  return Math.floor(1 + Math.random()*(175 + 1 - 1))
}

function randWidth(){
  return Math.floor(200 + Math.random()*(350 + 1 - 200))
}

//how to get images out in a certain order!
//format images
function formatImages(images) {
  return images.map(image => {
      return html`
      <img src=${getUrl(image).width(1250).url()} align="center" style="margin-left: ${randWidMarg()}px; margin-right: ${randWidMarg()}px; margin-bottom: ${randBotMarg()}px" width=${randWidth()}/>
      `
     })
  }

function formatSeries(series) {
  return html`
  <div>
    ${series.title}
    ${formatImages(series.photos)}
  </div>
  `
}

//define template function
function home(state, emit){
  ready(() => {
    console.log('On Dom Category')
    if(state.page !== "commission"){
      state.page = state.route
      emit('setCategory', "commission")
    }
  })
  return html`
  <div id="container" style="width: 100vw; margin: auto; text-align: center;">
  ${console.log("preparing category")}
  </div>
  `
}

//export wrapped module
module.exports = wrapper(home)
