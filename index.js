//import choo
const choo = require('choo')

//import html helper
const html = require('choo/html')

//import template
const MainTemplate = require('./templates/Main.js')

//initialize choo
const app = choo()

const Main = (state) => {
    return html`
      ${state.cache(MainTemplate, 'Main').render()}
    `
  }

//create route
app.route('/', Main)
app.route('/:page', Main)

// start app
app.mount('div')
