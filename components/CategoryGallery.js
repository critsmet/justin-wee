const Nanofetcher = require('nanofetcher')
const html = require('choo/html')

module.exports = Gallery

class Gallery extends Nanofetcher {
    
    static identity (name) {   
      return String(name)
    }

    init (category, name) {
        this.category = category
        this.name = name
    }

    update (category) {
        this.category !== category && this.name !== name
    }

    placeholder () {
        return null
    }

    hydrate (resp) {
        function randBotMarg() {
            return Math.floor(1 + Math.random()*(100 + 1 - 1))
          }
          
          function randWidMarg() {
            return Math.floor(1 + Math.random()*(175 + 1 - 1))
          }
          
          function randWidth(){
            return Math.floor(200 + Math.random()*(350 + 1 - 200))
          }
          
          function formatImages(images) {
            return images.map(image => {
                return html`
                <img src=${getUrl(image).width(1250).url()} align="center" style="margin-left: ${randWidMarg()}px; margin-right: ${randWidMarg()}px; margin-bottom: ${randBotMarg()}px" width=${randWidth()}/>
                `
               })
            }
        const images = resp.map(result => {
            return {title: result.title, display_photos: result.display_photos, photos: result.photos}
        })
        return html`
        <div id="container" style="width: 100vw; margin: auto; text-align: center;">
            ${state.images.map(group => {
               return state.formatImages(group.photos)
          })
         }
        </div>
        `
    }

    fetch () {
        return fetch(`https://n3f1vhuk.api.sanity.io/v1/data/query/website?query=*[${category} == "${name}"]{title, photos, display_photos}`)
    }
}