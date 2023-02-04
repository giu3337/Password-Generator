const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];

let outPutOneEl = document.getElementById("outputOne-el");
let outPutTwoEl = document.getElementById("outputTwo-el");
let btnCopyOneEl = document.getElementById("BtncopyOne-el");
let btnCopyTwoEl = document.getElementById("BtncopyTwo-el");

// Function 2 Random Numbers*15





function randomPass() {
  let firstPass = [];
  for (let i = 0; i < 15; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    firstPass.push(characters[randomIndex]);
    let noCommasFirstPass = firstPass.join(""); 
    outPutOneEl.textContent = noCommasFirstPass; 
  }

  let secondPass = [];
  for (let i = 0; i < 15; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    secondPass.push(characters[randomIndex]);
    let noCommasSecondPass = secondPass.join(""); 
    outPutTwoEl.textContent = noCommasSecondPass; 
  }
}

// Function 2 Random Numbers*15


// On Clicks

function copyOutputOne() {
    let range = document.createRange();
    range.selectNode(outPutOneEl);
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
  
    btnCopyOneEl.textContent = "Copied";
  
    setTimeout(function() {
      btnCopyOneEl.textContent = "Copy";
    }, 1000);
  }
  
  function copyOutputTwo() {
    let range = document.createRange();
    range.selectNode(outPutTwoEl);
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
  
    btnCopyTwoEl.textContent = "Copied";
  
    setTimeout(function() {
      btnCopyTwoEl.textContent = "Copy";
    }, 1000);
  }



btnCopyOneEl.addEventListener("click", copyOutputOne);
btnCopyTwoEl.addEventListener("click", copyOutputTwo);



// On Clicks



// Dark Mode

const darkModeButton = document.getElementById("toggle-dark-mode");

darkModeButton.addEventListener("click", function() {
  const currentStyleSheet = document.getElementById("stylesheet").getAttribute("href");

  if (currentStyleSheet === "style.css") {
    document.getElementById("stylesheet").setAttribute("href", "stylelight.css");
  } else {
    document.getElementById("stylesheet").setAttribute("href", "style.css");
  }
});

// Dark Mode

