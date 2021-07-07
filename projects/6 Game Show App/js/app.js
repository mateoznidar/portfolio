
// Get the elements I’ll need from HTML

let qwerty = document.querySelector("#qwerty");
let phrase = document.getElementById("phrase");
let keyboard = document.getElementsByTagName("button");
let missed = 0;

// Attach a event listener to the “Start Game” button to hide the start screen overlay.

let btnReset = document.querySelector(".btn__reset");
let overlay = document.getElementById("overlay");

btnReset.addEventListener("click", () => {
    overlay.style.display = "none";
    if (btnReset.textContent === "Play Again") {
        resetGame();
    }
});

// Create a phrases array that contains at least 5 different phrases as strings.

let phrases = [ 
            "The life is beautiful",
            "Never stop looking up",
            "Hakuna matata",
            "A smile is happiness",
            "Always do your best"
            ];

// Create a getRandomPhraseAsArray function
  
function getRandomPhraseAsArray(arr) {
    let randomNum = Math.floor(Math.random() * arr.length);
    let randomItem = arr[randomNum];
    let newPhrase = randomItem.split("");
    return newPhrase;
}

let newPhrase = getRandomPhraseAsArray(phrases);


// Set the game display.

function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
        let ul = document.querySelector("#phrase ul");
        let li = document.createElement("li");
        li.textContent = arr[i].toUpperCase();
        if (li.textContent != " ") {
            ul.appendChild(li);
            li.classList.add("letter");
        }   else {
            li.textContent = " ";
            ul.appendChild(li);
            li.classList.add("space");
        }
    }
}

addPhraseToDisplay(newPhrase);




// Create a checkLetter function.

let letters = document.getElementsByClassName("letter");

let checkLetter = (button) => {
    let letters = document.querySelectorAll(".letter");
    let match = null;
    for (let i = 0; i < letters.length; i++) {
        if (button == letters[i].textContent.toLowerCase()) {  
            letters[i].classList.add("show");
            letters[i].style.transition = "1s";
            match = true;
        }    
    }   return match;
};

let lives = document.querySelectorAll(".tries img");

// Add an event listener to the keyboard.
// Count the missed guesses in the game.


qwerty.addEventListener("click", (e) => {
    if (e.target.tagName == "BUTTON") {
        e.target.className = "chosen";
        e.target.disabled = true;
        let letterFound = checkLetter(e.target.textContent.toLowerCase());
        if (letterFound == null) {
            lives[missed].src = "images/lostHeart.png";
            missed ++;
            checkWin();
        } else {
            checkWin();
        }
        
        
    }
});

let show = document.getElementsByClassName("show");


function checkWin() {
    
    let youWin = document.querySelector(".title");
    if (show.length === letters.length) {
        overlay.classList.add("win");
        overlay.style.display = "flex";
        youWin.textContent = "You WIN !!!";
        btnReset.textContent = "Play Again";
        btnReset.style.backgroundColor = "#78cf82";
        btnReset.style.color = "white";
        btnReset.style.border = "1px solid white";
    }   else if (missed == 5) {
            overlay.classList.add("lose");
            overlay.style.display = "flex";
            youWin.textContent = "You LOSE !!!";
            btnReset.textContent = "Play Again";
            btnReset.style.backgroundColor = "#d94545";
            btnReset.style.color = "white";
            btnReset.style.border = "1px solid white";
    }
};

function resetGame() {
    missed = 0;
    let ul = document.querySelector("#phrase ul");
    ul.innerHTML = "";
    overlay.classList.remove("lose");
    overlay.classList.remove("win");
    let newPhrase = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(newPhrase);
    let chosen = document.querySelectorAll(".chosen");
    for (let i = 0; i < chosen.length; i++) {
        chosen[i].classList.remove("chosen");
        chosen[i].disabled = false;
    }
    for (let i = 0; i < lives.length; i++) {
        lives[i].src = "images/liveHeart.png";
    }
    
};