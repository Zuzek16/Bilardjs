let ran = false;

function validateAnwser() {

  const radioBtn = document.getElementsByName("quiz");
  let anwser = document.querySelector("input[type=radio]:checked").value;
  
  switch (anwser) {
    case 0:
    wrongAnwser();
      break;
    case 1:
    wrongAnwser();
      break;
    case 3:
    rightAnwser();
      break;
    case 4:
    wrongAnwser();
      break;
    
  }

}

function wrongAnwser(params) {
  
}

function rightAnwser(params) {
  
}

function dontKnow () {
  if (!ran) {
    ran = true;
    const fishPic = document.getElementById("fishImg");
    delBtn();
    fishPic.style.display = "flex";
    fishPic.style.visibility = "visible";
    alert("FISH! \n Look at their silly little eyes, and think of it. \n They just breathe air just like you, but they are submerged in water all their life. \n Crazy... \n and how do they see outside water?");
    document.getElementById("story").append(document.createElement("p").innerText = "It doesn't get any betta than this");
  } else {
    return;
  }
 
}

function doKnow () {
  ran = true;
  console.log('ran do know');
  delBtn();
  const div = document.getElementById("doKnow");
  div.style.display = "block";
  div.style.visibility = "visible";
}

function delBtn () {
  const btns = document.querySelectorAll("button.fishBtn"); 
  btns.forEach(element => {
    element.style.display = "none";
    element.style.visibility = "hidden";
  });
}