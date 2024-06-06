// App Name: Password Generator

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "."];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let outPutOneEl = document.getElementById("outputOne-el");
let outPutTwoEl = document.getElementById("outputTwo-el");
let btnCopyOneEl = document.getElementById("BtncopyOne-el");
let btnCopyTwoEl = document.getElementById("BtncopyTwo-el");


// Function 2 Random Numbers*15


function randomPass() {
    let passwordLength = document.querySelector("#passwordLength-el").value;
    let includeSymbols = document.getElementById("include-symbols-el").checked;
    let includeNumbers = document.getElementById("include-numbers-el").checked;
    
    let firstPass = [];
    let secondPass = [];

    if (!includeSymbols && !includeNumbers) {
        allChars = characters;
    } else if (includeSymbols && !includeNumbers) {
        allChars = symbols;
    } else if (!includeSymbols && includeNumbers) {
        allChars = numbers;
    } else {
        allChars = characters.concat(symbols).concat(numbers);
    }
  
    for (let i = 0; i < passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * allChars.length);
      firstPass.push(allChars[randomIndex]);
    }
    let noCommasFirstPass = firstPass.join("");
    outPutOneEl.textContent = noCommasFirstPass;

    for (let i = 0; i < passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * allChars.length);
      secondPass.push(allChars[randomIndex]);
    }
    let noCommasSecondPass = secondPass.join("");
    outPutTwoEl.textContent = noCommasSecondPass;
  }
  
document.getElementById("passwordLength-el").value = 8;
document.getElementById("include-symbols-el").checked = true;
document.getElementById("include-numbers-el").checked = true;
document.getElementById("include-symbols-el").addEventListener("change", randomPass);
document.getElementById("include-numbers-el").addEventListener("change", randomPass);




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









