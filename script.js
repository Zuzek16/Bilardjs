import Two from 'https://cdn.skypack.dev/two.js@latest';

const two = new Two({
  type: Two.Types.canvas,
  height: document.getElementById("canvas").height,
  width: document.getElementById("canvas").width,
  autostart: true
}).appendTo(document.getElementById("canvas"));

const canvasEl = document.getElementsByTagName("canvas");

class Color {
  static field = "#1a4a1a"
  static rail = "#873e23"
  static pocket = "#56352d"
}

function renderTable(size = 100, horizontal = true) {//
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
    rail.linewidth = 15;
    rail.fill = Color.field;
    const detail = [];
    let pf = 16;
    for (let i = 0; i < 4; i++) {

      switch (i) {
        case 0:
      detail[i] = two.makeRoundedRectangle(tablex - (width/2) + pf, tabley - height/2 + pf, size/10, size/10, 25);
          
          break;
        case 1:
      detail[i] = two.makeRoundedRectangle(tablex + (width/2) - pf, tabley - height/2 + pf, size/10, size/10, 25);
          
          break;
        case 2:
      detail[i] = two.makeRoundedRectangle(tablex - (width/2) +pf, tabley + height/2 - pf, size/10, size/10, 25);
          
          break;
        case 3:
      detail[i] = two.makeRoundedRectangle(tablex + (width/2) - pf, tabley + height/2 - pf, size/10, size/10, 25);
          
          break;
        
      }
      
    }
    detail.forEach(el => {
      el.fill = Color.field;
      el.stroke = Color.field;
    });


    let numberOfPockets = 6;//only even ?
    let pocketSize = size/40;
    const pockets = [];//starting from the upper left corner -> clockwise
    const isCornerPocket = [1, 0, 1, 1, 0, 1];
    let y = 0;
    let x = 0;
    for (let i = 0; i < numberOfPockets; i++) {
      
      if ((numberOfPockets/2) > i) {
        if (i == 0) {
        x = tablex - (width/2);
        } else {
        x = tablex - (width/2) + (width/i);
        }
        y = tabley - height/2;
      } else {
        if (i == 0 || (i-(numberOfPockets/2)) == 0) {
          x = tablex - (width/2);
          } else {
          x = tablex - (width/2) + (width/(i-(numberOfPockets/2)));
          }
  
        y = tabley + height/2;
      }

      pockets[i] = two.makeCircle(x, y, pocketSize);
      pockets[i].fill = "white";
      pockets[i].stroke = "white";
    }

}
  renderTable(200);
  two.update();