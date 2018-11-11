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
const query = `*[title == "Home"]`

//get urls
function getUrl(source){
  return builder.image(source)
}

//format images
function formatImages(images){
  return images.map(image => {
    return html`
    <img src=${getUrl(image).width(900).url()} width="400"/>
    `
  })
}

//define template function
function home(state, emit){
  ready(() => {
    if(state.page !== "home"){
      state.page = "home"
      emit('update', query)
    }
  })
  return html`
  <div>
  ${formatImages(state.images)}

  </div>
  `
}

//export wrapped module
module.exports = wrapper(home)
