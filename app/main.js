import MemeController from './components/memeController.js';

class App {
  constructor() {
    this.controllers = {
      memeController: new MemeController()
    }
  }
}

window['app'] = new App()