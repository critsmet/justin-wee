//import choo
const choo = require('choo')

//import html helper
const html = require('choo/html')

//import template
const main = require('./templates/main.js')

//initialize choo
const app = choo()

//create route
app.route('/', main)

// start app
app.mount('div')
