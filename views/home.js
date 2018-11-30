const html = require('choo/html')
const ready = require('document-ready')
const wrapper = require('./wrapper.js')

//define template function
function home(state, emit){
  ready(() => {
    if(state.page !== "Home"){
      emit('setImages', "title", "Home")
    }

  })
  return html`
  <div id="container" style="width: 100vw; margin: auto; text-align: center;">
  ${state.page === "Home" ? state.formatImages(state.images[0].photos) : console.log("not home")}
  </div>
  `
}

//export wrapped module
module.exports = home
