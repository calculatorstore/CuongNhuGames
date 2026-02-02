const wordList = document.querySelector("#word-list");
const correctGuessText = document.querySelector("#correct-guess");
const incorrectGuessText = document.querySelector("#incorrect-guess");
const keyboardDiv = document.querySelector("#keyboard");
const appleTreeImage = document.querySelector("#apple-tree");
const badApples = document.querySelector("#bad-apples");
const gameModal = document.querySelector("#game-modal");
// Initializing game variables
let currentWords, currentWordsShort, currentCategory, filteredPhilosophyData, currentCategorySize, currentTopic, currentTopicCategories, currentTopicIndex, allCorrectLetters, guessedCorrectLetters, wrongGuessCount;
const maxGuesses = 6;

const setCategory = () => {
    // Set the category based on radio button selection.  This changes the currentCategory, filteredPhilosophyData, and currentCategorySize
    currentCategory = document.querySelector('input[name="category"]:checked').value
    if (currentCategory == "All"){
        filteredPhilosophyData = philosophyData
    } else {
        filteredPhilosophyData = philosophyData.filter(dataElt => dataElt.Tags.includes(currentCategory))
    }
    currentCategorySize = filteredPhilosophyData.length
}

const setTopic = () => {
    // Set the topic based on the category and topic index
    const curPhilosphy = filteredPhilosophyData[currentTopicIndex % currentCategorySize]
    currentWords = curPhilosphy.List ; // Making currentWord as random word
    currentWordsShort = currentWords.map(w => w.replaceAll(/\s*\(.*/gi, ""))
    currentTopic = curPhilosphy.Name
    currentTopicCategories = curPhilosphy.Tags.join("/")
}

const resetGame = () => {
    // Ressetting game variables and UI elements
    allCorrectLetters = [];
    guessedCorrectLetters = []
    wrongGuessCount = 0;
    appleTreeImage.src = "../Assets/Images/0.jpg";
    badApples.innerHTML = ""
    correctGuessText.innerHTML = "0"
    incorrectGuessText.innerHTML = `0/${maxGuesses}`
    wordList.innerHTML="";
    document.querySelector("#current-topic").innerText = `${currentTopic} (${currentCategory}: ${currentTopicIndex+1}/${currentCategorySize})`;
    document.querySelector("#current-topic-category").innerText = `${currentTopicCategories}`;
    currentWordsShort.forEach((currentWord) => {
        let wordListElt = document.createElement("li");
        let wordDisplay = document.createElement("ul");
        wordDisplay.classList.add("word-display");
        currentWord.split("").forEach((x) => {
            if(x.match(/[a-z]/i)) {
                if(!allCorrectLetters.includes(x.toLowerCase())){
                    allCorrectLetters.push(x.toLowerCase());
                }
                wordDisplay.innerHTML += `<li class="letter">__</li>`;
            } else {
                wordDisplay.innerHTML += `<li class="letter">${x}</li>`;
            }
        });
        wordListElt.appendChild(wordDisplay);
        wordList.appendChild(wordListElt);
    });
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    gameModal.classList.remove("show");
}

const changeCategory = () => {
    // Select the previous topic from the category
    setCategory();
    currentTopicIndex = currentTopicIndex % currentCategorySize
    setTopic();
    resetGame();
}


const getPreviousTopic = () => {
    // Select the previous topic from the category
    setCategory();
    currentTopicIndex = (currentTopicIndex - 1) % currentCategorySize
    setTopic();
    resetGame();
}

const getNextTopic = () => {
    // Select the next topic from the category
    setCategory();
    currentTopicIndex = (currentTopicIndex + 1) % currentCategorySize
    setTopic();
    resetGame();
}

const getRandomTopic = () => {
    // Selecting a random topic from the category
    setCategory();
    currentTopicIndex = Math.floor(Math.random() * filteredPhilosophyData.length);
    setTopic();
    resetGame();
}

const gameOver = (isVictory) => {
    // After game complete.. showing modal with relevant details
    const modalText = isVictory ? `You found the correct answer:` : 'The answer was:';
    const htmlWordList = currentWords.map(w => `<li>${w}</li>`).join("")
    const imageNo = Math.floor(17 * guessedCorrectLetters.length / allCorrectLetters.length)

    gameModal.querySelector("img").src = `../Assets/Images/${imageNo}.jpg`;
    gameModal.querySelector("h4").innerText = isVictory ? 'Congrats!' : 'Game Over!';
    gameModal.querySelector("p").innerHTML = `${modalText} <ol>${htmlWordList}</ol>`;
    gameModal.classList.add("show");
}
const initGame = (button, clickedLetter) => {
    // Checking if clickedLetter is exist on the currentWord
    if(allCorrectLetters.includes(clickedLetter.toLowerCase())){
        guessedCorrectLetters.push(clickedLetter.toLowerCase());        
        correctGuessText.innerHTML = `${guessedCorrectLetters.length}`;
        // Showing all correct letters on the word display
        currentWordsShort.forEach((currentWord, wordIndex) => {
            let currentWordDisplay = wordList.childNodes[wordIndex].firstChild;
            [...currentWord].forEach((letter, letterIndex) => {
                if(letter.toLowerCase() === clickedLetter.toLowerCase()) {
                    currentWordDisplay.querySelectorAll("li")[letterIndex].innerText = letter;
                }
            });
        })
    } else {
        // If clicked letter doesn't exist then update the wrongGuessCount and bad apple image
        wrongGuessCount++;
        incorrectGuessText.innerHTML = `${wrongGuessCount}/${maxGuesses}`
        let badApple = document.createElement("td");
        badApple.innerHTML = `<figure><img src='../Assets/Images/BadApple.png' alt='${clickedLetter}' /><figcaption>${clickedLetter}</figcaption></figure>`
        badApples.appendChild(badApple);
    }
    const imageNo = Math.floor(17 * guessedCorrectLetters.length / allCorrectLetters.length)
    appleTreeImage.src = `../Assets/Images/${imageNo}.jpg`;
    button.disabled = true; // Disabling the clicked button so user can't click again
    // Calling gameOver function if any of these condition meets
    if(wrongGuessCount === maxGuesses) return gameOver(false);
    if(allCorrectLetters.length === guessedCorrectLetters.length) return gameOver(true);
}

// Creating keyboard buttons and adding event listeners
const keyboardRowLetters = [
"QWERTYUIOP",
"ASDFGHJKL",
"ZXCVBNM"
]

keyboardRowLetters.forEach((letterRow) => {
    const letterRowElt = document.createElement("div")
    letterRowElt.classList.add("keyboard-row");     
    letterRow.split("").forEach( (buttonLetter) => {
        const button = document.createElement("button");
        button.classList.add("key");
        button.innerText = buttonLetter;
        button.id = `keyboard_${buttonLetter}`
        letterRowElt.appendChild(button);
        button.addEventListener("click", (e) => initGame(e.target, buttonLetter));
    })
    keyboardDiv.appendChild(letterRowElt);    
}) 

/*
//for (let i = 97; i <= 122; i++) {
    const buttonLetter = String.fromCharCode(i)
    const button = document.createElement("button");
    button.classList.add("key");
    button.innerText = buttonLetter;
    button.id = `keyboard_${buttonLetter}`
    keyboardDiv.appendChild(button);
    button.addEventListener("click", (e) => initGame(e.target, buttonLetter));
//}
*/

document.addEventListener('keyup', (event) => {
    console.log(event.key)
    if (gameModal.classList.contains("show")){
        if(["Enter", " "].includes(event.key)){
            console.log("Next Topic!")
            button = document.getElementById(`modal-next-topic`)
            button.click();
        }
    } else {
        if (event.key.match(/^[a-z]$/i)){
            console.log("Guess!")
            button = document.getElementById(`keyboard_${event.key.toUpperCase()}`);
            if (!button.disabled){
                button.click();
            }
        }
    }
});

getRandomTopic();