//import choo's template helper
const html = require('choo/html')

//import wrapper
const wrapper = require('./wrapper.js')

//define template function
function home(state){
  return html`
  <div>home</div>
  `
}

//export wrapped module
module.exports = wrapper(home)
