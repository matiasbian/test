 //Create a Pixi Application
let app = new PIXI.Application({width: 800, height: 600});

let texture = PIXI.utils.TextureCache["images/anySpriteImage.png"];
let sprite = new PIXI.Sprite(texture);



//Add the canvas that Pixi automatically created for you to the HTML document
 document.body.appendChild(app.view);