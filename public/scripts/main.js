 //Create a Pixi Application
let app = new PIXI.Application({width: 490, height: 600});

PIXI.loader
  .add([
    {name: "simbol_0", url: "../assets/images/symbols/sym_a.png"},
    {name: "simbol_1", url: "../assets/images/symbols/sym_b.png"},
    {name: "simbol_2", url: "../assets/images/symbols/sym_c.png"},
    {name: "simbol_3", url: "../assets/images/symbols/sym_d.png"},
    {name: "simbol_4", url: "../assets/images/symbols/sym_e.png"},
    {name: "background", url: "../assets/images/frame.png"},
    {name: "win_button", url: "../assets/images/prize_window.png"},
    {name: "spin_button", url: "../assets/images/btn_spin.png"}
  ])
  .load(setup);
  
function setup () {
  //Create the cat sprite
  let textures = PIXI.utils.TextureCache
  let background = new PIXI.Sprite(textures["background"]);
  let win = new PIXI.Sprite(textures["win_button"]);
  let simbols = createSimbols(5, textures);
  win.x = 15
  win.y = 500
  let spin = new PIXI.Sprite(textures["spin_button"]);
  spin.x = 305
  spin.y = 500


  //Add the cat to the stage
  app.stage.addChild(background);
  app.stage.addChild(win);
  app.stage.addChild(spin);
  app.stage.addChild(simbols[0])
  setSpriteInPosition(simbols[0], 0,0)

}

function gameLoop() {

  requestAnimationFrame(gameLoop);

}

function setSpriteInPosition(simbol, index, arr_pos){
  simbol.x = screenPositions[index].x
  simbol.y = screenPositions[index].y
}

function getSpriteByIndex(index){

}

function createSimbols(simbols_amount, textures){
  let arr = []
  for (let i = 0 ; i < 5; i++){
    arr.push(new PIXI.Sprite(textures["simbol_" + i]))
  }
  return arr
}

const screenPositions = [
  {x: 30, y:30},
  {x: 0, y:0},
  {x: 0, y:0}
]


//Start the loop
gameLoop();

//Add the canvas that Pixi automatically created for you to the HTML document
 document.body.appendChild(app.view);