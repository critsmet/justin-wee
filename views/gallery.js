const html = require('choo/html')
const ready = require('document-ready')


//define template function
function gallery(state, emit){

  function formatImages(images){
    return images.map(image => {
      return html`
        <img src=${state.getUrl(image).width(300).url()}/>
      `
    })
  }

  function formatSeries(photos_array){
    return photos_array.map(photos_object => {
      return html`
        <div>
          <div>
            ${formatImages(photos_object.display_photos)}
          </div>
          <span>
            <a href="/${photos_object.title.toLowerCase().split(" ").join("-")}/1">${photos_object.title}</a>
          </span>
        </div>
      `
    })
  }

  let name = state.route.charAt(0).toUpperCase() + state.route.slice(1)
  ready(() => {
    if(state.page !== name){
      emit('setImages', "category", name, "title, display_photos")
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
