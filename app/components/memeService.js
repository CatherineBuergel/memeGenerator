import Meme from "../models/Meme.js"
//private stuff
let _state = {
  memes: []
}

let _subscribers = {
  memes: []
}

function _setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn())
}

//public stuff

export default class memeService {
  constructor() {
    console.log("service has been made!")
  }

  get Memes() {
    return _state.memes.map(m => new Meme(m))
  }

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  addMeme(newMeme) {
    let meme = new Meme(newMeme)
    let updatedMemeArray = [meme, ..._state.memes]
    _setState('memes', updatedMemeArray)
  }


}