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

//query
const query = `*[category == "commission"]{title, display_photos}`

//get urls
function getUrl(source){
  return builder.image(source)
}

//random margin & width
function randBotMarg() {
  return Math.floor(50 + Math.random()*(100 + 1 - 50))
}

function randWidMarg() {
  return Math.floor(125 + Math.random()*(175 + 1 - 125))
}

function randWidth(){
  return Math.floor(200 + Math.random()*(350 + 1 - 200))
}

//how to get images out in a certain order!
//format images
function formatImages(images) {
   return images.map(commission => {
     commission.photos.map(image=> {
      return html`
      <img src=${getUrl(image).width(1250).url()} align="center" style="margin-left: ${randWidMarg()}px; margin-right: ${randWidMarg()}px; margin-bottom: ${randBotMarg()}px" width=${randWidth()}/>
      `
     })
  })
}

//define template function
function home(state, emit){
  ready(() => {
    if(state.page !== "commission"){
      state.page = "commission"
      emit('setCommission', query)
    }
  })
  return html`
  <div id="container" style="width: 100vw; margin: auto; text-align: center;">
    ${formatImages(state.commissions)}
  </div>
  `
}

//export wrapped module
module.exports = wrapper(home)
