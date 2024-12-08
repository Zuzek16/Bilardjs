let ran = false;
let fails = 0;

function validateAnwser() {
  const radioBtn = document.getElementsByName("quiz");
  let anwser = document.querySelector("input[type=radio]:checked").value;
  
  switch (anwser) {
    case "0":
    case "1":
    case "3":
    wrongAnwser(anwser);
      break;
    case "2":
    rightAnwser();
      break;
  }
}

function wrongAnwser(anwser) {
  console.log("ran wrongAnwser");
  
  const el = document.querySelector("input[value=\'"+anwser+"\']");
  let id = el.id;
  const label = document.querySelector("label[for="+ id +"]")
  label.remove();
  el.remove();  

  let text = "";
  switch (fails) {
    case 0:
      text = "Not so clever after all, you can try again."
      break;
    case 1:
      text = "Third time's the charm."
      break;
    case 2:
      text = "Not quite... Can't get it wrong now."
      break;
  }

  document.getElementById("failedAnwser").innerText = text;
  fails++;
}

function rightAnwser() {
  if (fails > 0) {
    alert("Now you get it!\nGood job.");    
  } else {
    alert("Exacly!\nYou know what I'm talking about!");
  }

  document.getElementById("doKnow").remove();

  ran = false;
  dontKnow(false);
}

function dontKnow (alert = true) {
  console.log("dont know");
  
  if (!ran) {
    ran = true;
    const fishPic = document.getElementById("fishImg");
    delBtn();
    fishPic.style.display = "flex";
    fishPic.style.visibility = "visible";
    if (alert) {
      alert("FISH! \n Look at their silly little eyes, and think of it. \n They just breathe air just like you, but they are submerged in water all their life. \n Crazy... \n and how do they see outside water?");
    }
    document.getElementById("story").append(document.createElement("p").innerText = "It doesn't get any betta than this");
  } else {
    return;
  }
 
}

function doKnow () {
  ran = true;
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