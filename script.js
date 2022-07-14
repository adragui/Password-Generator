const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const generateButton = document.getElementById("generate-btn")
let pwdShowOne = document.getElementById("pswd-show-one")
let pwdShowTwo = document.getElementById("pswd-show-two")

function randomValue () {
    return Math.floor(Math.random()*characters.length)
}

generateButton.addEventListener ("click", function() {
    pwdShowOne.textContent = ""
    pwdShowTwo.textContent = ""
    for (let i = 0 ; i < 15 ; i++) {
        pwdShowOne.textContent += characters[randomValue()]
        pwdShowTwo.textContent += characters[randomValue()]
    }
})
