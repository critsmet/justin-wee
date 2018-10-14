//import choo's html helper
const html = require('choo/html')

//export module
module.exports = function(state, emit) {
  return html`
  <div class="main">
    <span class="name" onclick=${navigate}>justin j wee</span>
    <span class="commission" onclick=${navigate}>commission</span>
    <span class="personal" onclick=${navigate}>personal</span>
    <span class="contact" onclick=${navigate}>contract</span>
  </div>
  `
  function navigate(e){
    console.log(e.target.className)
  }
}
