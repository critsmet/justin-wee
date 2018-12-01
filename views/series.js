const html = require('choo/html')
const ready = require('document-ready')

//define template function
function series(state, emit){

  function urlToName(string){
    return string.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
  }

  function formatImage(image){
    return html`
      <img src=${state.getUrl(image).width(600).url()} width="300px"/>
    `
  }

  let name = urlToName(state.params.series)

  ready(() => {
    if(state.page !== name){
      emit("setImages", "title", name, "title, photos")
    }
  })
  console.log(state.page, state.images, state.params)
  return html`
  <div>
    ${state.page === name ? formatImage(state.images[0].photos[state.params.photo]) : null }
    <a href="/${state.params.series}/${parseInt(state.params.photo) + 1}">next</a>
  </div>
  `
}

//export wrapped module
module.exports = series
