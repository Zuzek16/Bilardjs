import Two from 'https://cdn.skypack.dev/two.js@latest';

const two = new Two({
  type: Two.Types.canvas,
  // fullscreen: true,
  height: document.getElementById("canvas").height,
  width: document.getElementById("canvas").width,
  autostart: true
}).appendTo(document.getElementById("canvas"));

const canvasEl = document.getElementsByTagName("canvas");

class Color {
  constructor() {
    console.log("Properly created color instance");
    
  }

  static field = "#1a4a1a"
  static rail = "#873e23"
  static pocket = "#56352d"
  // static pocket = "#fff"

}

function renderTable(size = 100, horizontal = true) {
    let railRadius = 15;
    let width;
    let height;
    if (horizontal) {
      size = two.width*0.8;
      height = size/2;
      width = size;
    } else {
      size = two.height*0.8;
      height = size;
      width = size/2;
    }

    let tablex = two.width * 0.5;
    let tabley = two.height * 0.5;
    let rail = two.makeRoundedRectangle(tablex, tabley, width, height, railRadius);
    rail.stroke = Color.rail;
    rail.linewidth = 20;
    rail.fill = Color.field;

    //holes
    let numberOfPockets = 6;
    let pocketSize = size/40;
    const pockets = [];//starting from the upper left corner -> clockwise
    for (let i = 0; i < 6; i++) {
      let x = tablex - (width/2);
      let y = tabley;
      pockets[i] = two.makeCircle(x, y, pocketSize);
      pockets[i].fill = Color.pocket;
      pockets[i].stroke = Color.pocket;
      
    }

}
renderTable(200);

  // Two.js has convenient methods to make shapes and insert them into the scene.
  var radius = 50;
  var x = two.width * 0.5;
  var y = two.height * 0.5 - radius * 1.25;
  var circle = two.makeCircle(x, y, radius);
  
  y = two.height * 0.5 + radius * 1.25;
  var width = 100;
  var height = 100;

  // The object returned has many stylable properties:
  circle.fill = '#FF8000';
  // And accepts all valid CSS color:
  circle.stroke = 'orangered';
  circle.linewidth = 5;
  
  // Don’t forget to tell two to draw everything to the screen
  two.update();