const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let savedPass = []
let pwdShowOne = document.getElementById("pswd-show-one")
let pwdShowTwo = document.getElementById("pswd-show-two")

function passwordCreator() {
    passArray = []
    for (let i = 0 ; i < 15 ; i++) {
        passArray.push(characters[Math.floor(Math.random()*characters.length)])
    } 
    return passArray.join("")
}

function pwdButton() {
    savedPass = []
    pwdShowOne.textContent = passwordCreator()
    pwdShowTwo.textContent = passwordCreator()
    savedPass.push(pwdShowOne.textContent, pwdShowTwo.textContent)
}

function copyToClipboard(text) {
   const elem = document.createElement('textarea');
   elem.value = text;
   document.body.appendChild(elem);
   elem.select();
   document.execCommand('copy');
   document.body.removeChild(elem);
   alert("Se copio al Portapapeles")
}