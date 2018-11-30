const html = require('choo/html')
const ready = require('document-ready')
const wrapper = require('./wrapper.js')

//define template function
function gallery(state, emit){

  let name = state.route.charAt(0).toUpperCase() + state.route.slice(1)
  ready(() => {
    if(state.page !== name){
      emit('setImages', "category", name)
    }

  })
  return html`
  <div id="container" style="width: 100vw; margin: auto; text-align: center;">
    ${state.page === name ? console.log("yay!") : null}
  </div>
  `
}

//export wrapped module
module.exports = wrapper(gallery)
