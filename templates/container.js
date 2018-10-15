//import choo's html helper & component
const html = require('choo/html')
const Component = require('choo/component')

//import templates
const category = require('./category.js')
const series = require('./series.js')
const home = require('./home.js')
const info = require('./info.js')

//make export
module.exports = class Container extends Component {
  constructor(id, state, emit){
    super(id)
    this.local = state.components[id] = {params: state.params.page}
  }

  template(){
    if(this.local.params === undefined){
      return home
    } else if (this.local.params === "commission" || this.local.params === "personal") {
      return category
    } else if (this.local.params === "info"){
      return info
    }
  }

  createElement(){
    console.log("container!!")
    return this.template()()
  }

  update(){
        console.log("trying!!")
    return true
  }
}
