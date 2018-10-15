//import choo's html helper
const html = require('choo/html')

//import container component
const containerComponent = require('./container.js')

//export module
module.exports = function(state) {

  const container = new containerComponent("mainContainer", state)

  return html`
  <div class="main">
    ${container.render()}
  </div>
  `
}
