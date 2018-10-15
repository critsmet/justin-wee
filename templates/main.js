//import choo's html helper & component
const html = require('choo/html')
const Component = require('choo/component')

//import template
const Container = require('./container.js')


//export module
module.exports = class Main extends Component {
  constructor (id, state, emit){
    super(id)
    this.state = state
    this.local = state.components[id] = {}
    this.local.page = state.params.page
    }

  template(){
    return html`
    ${new Container("Container", this.state, this.state.emit).render()}
    `
  }

  createElement(){
    console.log("hi")
    return html`
    <div id="main">
      <a class="name" href="/">justin j wee</a>
      <a class="commission" href="/commission">commission</a>
      <a class="personal" href="/personal">personal</a>
      <a class="contact" href="/info">contact</a>
      <br>
      <div id="page">
      ${this.template()}
      </div>
    </div>
    `
  }

  load(){
    console.log("yyooo")
  }

  update(){
    if(this.local.page !== this.state.params.page){
      this.local.page = this.state.params.page
      page.innerHTML = ``
      page.appendChild(this.template())
    }
    return false
  }
}
