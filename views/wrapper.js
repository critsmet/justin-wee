//import choo's html helper & component
const html = require('choo/html')

//export module
module.exports = function wrapper(template) {
  return function(state){
    console.log(state)
    return html`
    <body>
      <link rel="stylesheet" href="../style.css"/>
      <a class="name" href="/">justin j wee</a>
      <a class="commission" href="/commission">commission</a>
      <a class="personal" href="/personal">personal</a>
      <a class="contact" href="/info">contact</a>
      <br>
      ${template(state)}
    </body>
    `
  }
}
