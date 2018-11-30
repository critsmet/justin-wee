const html = require('choo/html')
const ready = require('document-ready')


//define template function
function gallery(state, emit){

  function formatImages(images){
    return images.map(image => {
      return html`
        <img src=${state.getUrl(image).width(1250).url()}/>
      `
    })
  }

  formatSeries(photos_array){
    photos_array.map(object => {
      
    })
  }

  let name = state.route.charAt(0).toUpperCase() + state.route.slice(1)
  ready(() => {
    if(state.page !== name){
      emit('setImages', "category", name)
    }

  })
  return html`
  <div id="container" style="width: 100vw; margin: auto; text-align: center;">
    ${state.page === name ? formatSeries(state.images) : null}
  </div>
  `
}

//export wrapped module
module.exports = gallery
