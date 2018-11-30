const html = require('choo/html')
const ready = require('document-ready')
const wrapper = require('./wrapper.js')

//define template function
function gallery(state, emit){

  let name = state.route === "/" ? "Home" : state.route.charAt(0).toUpperCase() + state.route.slice(1)
  ready(() => {
    let category = name === "Home" ? "title" : "category"
    if(state.page !== state.route){
      emit('setImages', category, name)
    }

  })
  return html`
  <div id="container" style="width: 100vw; margin: auto; text-align: center;">
  ${state.page === name ? state.formatImages(state.images[0].photos) : null}
  </div>
  `
}

//export wrapped module
module.exports = wrapper(gallery)
