//import choo's template helper
const html = require('choo/html')

//import wrapper
const wrapper = require('./wrapper.js')

//define template function
function info(state){
  return html`
  <div>info</div>
  `
}

//export wrapped module
module.exports = wrapper(info)
