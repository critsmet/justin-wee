//import choo's html helper & component
const html = require('choo/html')
const Component = require('choo/component')

//import templates
const category = require('./category.js')
const series = require('./series.js')
const home = require('./home.js')
const info = require('./info.js')

//export module
module.exports = class Container extends Component {
  constructor (id, state, emit){
    super(id)
    this.local = state.components[id] = {}
    this.local.page = home
    }

  load(){
    console.log("loaded")
  }

  createElement(){
    console.log("hi")
    return html`
    <div>
      <a class="name" href="/">justin j wee</a>
      <a class="commission" href="/commission">commission</a>
      <a class="personal" href="/personal">personal</a>
      <a class="contact" href="/info">contact</a>
      ${this.local.page()}
    </div>
    `
  }

  update(){
    return true
  }
}
