//import choo's template helper
const html = require('choo/html')

//import wrapper
const wrapper = require('./wrapper.js')

//define template function
function category(state, emitter){
  console.log(emitter)
  return html`
  <div>category</div>
  `
}

//export wrapped module
module.exports = wrapper(category)
