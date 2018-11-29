//import choo's template helper
const html = require('choo/html')

//import document ready
const ready = require('document-ready')

//import wrapper
const wrapper = require('./wrapper.js')

//define template function
function commission(state, emit){
  return html`
  <div id="container" style="width: 100vw; margin: auto; text-align: center;">
    ${state.page === "Commission" ? "False" : state.page = "True"}
  </div>
  `
}

//export wrapped module
module.exports = wrapper(commission)
