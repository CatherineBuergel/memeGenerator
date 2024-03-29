export default class Meme {
  constructor(data) {
    this.topScript = data.topScript
    this.bottomScript = data.bottomScript

    this.img = data.img
  }

  get Template() {
    return `
    <div class="col-6 text-center mt-5">
      <div class="card img-fluid" style="width:500px">
        <img class="card-img-top" src="${this.img}" alt="Card image"
          style="width:100%">
        <div class="card-img-overlay text-center align-items-center d-flex flex-column justify-content-between">
          <h1 class="text-pop">${this.topScript}</h1>
          <h1 class="text-pop">${this.bottomScript}</h1>
        </div>
      </div>
    </div>
    `
  }

}