const wordList = document.querySelector("#word-list");
const correctGuessText = document.querySelector("#correct-guess");
const incorrectGuessText = document.querySelector("#incorrect-guess");
const keyboardDiv = document.querySelector("#keyboard");
const appleTreeImage = document.querySelector("#apple-tree");
const badApples = document.querySelector("#bad-apples");
const gameModal = document.querySelector("#game-modal");
// Initializing game variables
const maxGuesses = 6;

const changeCategory = () => {
    // Select the previous topic from the category
    setCategory();
    setTopic();
}

const changeTopic = () => {
    // Select the previous topic from the category
    setTopic();
}

const getPreviousTopic = () => {
    // Select the previous topic from the category
    topicElement = document.getElementById("changeTopicDropDown");
    let currentTopicIndex = topicElement.selectedIndex;
    setCategory();
    let currentCategorySize = topicElement.options.length;
    currentTopicIndex = (currentCategorySize + currentTopicIndex - 1) % currentCategorySize;
    topicElement.selectedIndex = currentTopicIndex;
    setTopic();
}

const getNextTopic = () => {
    // Select the next topic from the category
    topicElement = document.getElementById("changeTopicDropDown");
    let currentTopicIndex = topicElement.selectedIndex;
    setCategory();
    let currentCategorySize = topicElement.options.length;
    currentTopicIndex = (currentTopicIndex + 1) % currentCategorySize
    topicElement.selectedIndex = currentTopicIndex;
    setTopic();
}

const getRandomTopic = () => {
    // Selecting a random topic from the category
    topicElement = document.getElementById("changeTopicDropDown");
    let currentTopicIndex = topicElement.selectedIndex;
    setCategory();
    let currentCategorySize = topicElement.options.length;
    currentTopicIndex = Math.floor(Math.random() * currentCategorySize);
    topicElement.selectedIndex = currentTopicIndex;
    setTopic();
}

const setCategory = () => {
    // Set the category based on drop down selection.  This changes the options for the topics as well
    categoryElt = document.getElementById("changeCategoryDropDown");
    topicElement = document.getElementById("changeTopicDropDown");
    let currentCategory = categoryElt.value;
    let currentTopicIndex = topicElement.selectedIndex

    if (currentCategory == "All"){
        filteredPhilosophyData = philosophyData
    } else {
        filteredPhilosophyData = philosophyData.filter(dataElt => dataElt.Tags.includes(currentCategory))
    }
    let currentCategorySize = filteredPhilosophyData.length
        
    topicElement.innerHTML = ""
    let topicIndex = 0
    filteredPhilosophyData.forEach((philosophyElt) => {
        topicIndex ++
        topicElement.innerHTML += `<option value="${philosophyElt.Name}">${philosophyElt.Name} (${topicIndex}/${currentCategorySize})</option>`
    });
    currentTopicIndex = currentTopicIndex % currentCategorySize;
    topicElement.selectedIndex = currentTopicIndex;
}

let allCorrectLetters, wrongGuessCount, guessedCorrectLetters

const setTopic = () => {
    // Set the topic based on the category and topic index
    categoryElt = document.getElementById("changeCategoryDropDown");
    topicElement = document.getElementById("changeTopicDropDown");

    const curPhilosphy = philosophyData.filter(dataElt => dataElt.Name == topicElement.value)[0];
    let currentWords = curPhilosphy.List ; // Making currentWord as random word
    let currentWordsShort = currentWords.map(w => w.replaceAll(/\s*\(.*/gi, ""));
    let currentTopic = curPhilosphy.Name;
    let currentTopicCategories = curPhilosphy.Tags.join("/");

    // Ressetting game variables and UI elements
    allCorrectLetters = [];
    guessedCorrectLetters = []
    wrongGuessCount = 0;
    appleTreeImage.src = "../Assets/Images/0.jpg";
    badApples.innerHTML = ""
    correctGuessText.innerHTML = "0"
    incorrectGuessText.innerHTML = `0/${maxGuesses}`
    wordList.innerHTML="";
    document.querySelector("#current-topic").innerText = `${currentTopic}`;
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

const initGame = (button, clickedLetter) => {
    // Set the topic based on the category and topic index
    categoryElt = document.getElementById("changeCategoryDropDown");
    topicElement = document.getElementById("changeTopicDropDown");

    const curPhilosphy = philosophyData.filter(dataElt => dataElt.Name == topicElement.value)[0];
    let currentWords = curPhilosphy.List ; // Making currentWord as random word
    let currentWordsShort = currentWords.map(w => w.replaceAll(/\s*\(.*/gi, ""));


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

const gameOver = (isVictory) => {
    // Set the topic based on the category and topic index
    categoryElt = document.getElementById("changeCategoryDropDown");
    topicElement = document.getElementById("changeTopicDropDown");

    const curPhilosphy = philosophyData.filter(dataElt => dataElt.Name == topicElement.value)[0];
    let currentWords = curPhilosphy.List ; // Making currentWord as random word


    // After game complete.. showing modal with relevant details
    const modalText = isVictory ? `You found the correct answer:` : 'The answer was:';
    const htmlWordList = currentWords.map(w => `<li>${w}</li>`).join("")
    const imageNo = Math.floor(17 * guessedCorrectLetters.length / allCorrectLetters.length)

    gameModal.querySelector("img").src = `../Assets/Images/${imageNo}.jpg`;
    gameModal.querySelector("h4").innerText = isVictory ? 'Congrats!' : 'Game Over!';
    gameModal.querySelector("p").innerHTML = `${modalText} <ol>${htmlWordList}</ol>`;
    gameModal.classList.add("show");
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