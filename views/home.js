//import choo's template helper
const html = require('choo/html')

//import document ready
const ready = require('document-ready')

//import wrapper
const wrapper = require('./wrapper.js')

//define template function
function home(state, emit){
    if(state.page !== "Home"){
      state.page = "Home"
      emit('setImages', "title", "Home")
    }
  return html`
  <div id="container" style="width: 100vw; margin: auto; text-align: center;">
    ${state.images.map(group => {
        return state.formatImages(group.photos)
    })
  }
  </div>
  `
}

//export wrapped module
module.exports = wrapper(home)
