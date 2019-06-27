import MemeService from "./memeService.js"

let _memeService = new MemeService()

//draw functions should not take in any arguments
function drawMemes() {
  let memes = _memeService.Memes
  //do not invoke getters

  let template = ''
  memes.forEach(m => {
    template += m.Template
  })
  document.getElementById('meme-dropzone').innerHTML = template
}

export default class memeController {
  constructor() {
    _memeService.addSubscriber('memes', drawMemes)
  }

  addMeme(event) {
    //sometimes you will see 'e' instead of event. this is just a parameter name. do not name your event 'e' in your html or it will break everything.
    event.preventDefault()
    let form = event.target
    let newMeme = {
      topScript: form.topScript.value,
      bottomScript: form.bottomScript.value,
      img: form.img.value
    }
    _memeService.addMeme(newMeme)
  }


}