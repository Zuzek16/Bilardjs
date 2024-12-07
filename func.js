function validateAnwser() {
  
}

function dontKnow () {
  const fishPic = document.getElementById("fishImg");
  delBtn();
  fishPic.style.display = "flex";
  fishPic.style.visibility = "visible";
  alert("FISH! \n Look at their silly little eyes, and think of it. \n They just breathe air just like you, but they are submerged in water all their life. \n Crazy... \n and how do they see outside water?");
}

function doKnow () {
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