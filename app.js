const startButton = document.querySelector("#start-game");
const startScreen = document.querySelector("#start-screen");
const gameScreen = document.querySelector("#game-screen");
const buttonsClass = document.querySelector(".buttons")
const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
const displayOutcome = document.querySelector('#outcome')
const highScore = document.querySelector('#best-result')
const playAgain = document.querySelector('#play-again')

let attempts = 0
let previousBest = 0
let cardsChosen = []
let cardsChosenIds = []
let cardsWon = []

let cardArray = [
    {
        name: "1",
        img: "images/1.jpg"
    },
    {
        name: "2",
        img: "images/2.jpg"
    },
    {
        name: "3",
        img: "images/3.jpg"
    },
    {
        name: "4",
        img: "images/4.jpg"
    },
    {
        name: "5",
        img: "images/5.jpg"
    },
    {
        name: "6",
        img: "images/6.jpg"
    },
    {
        name: "7",
        img: "images/7.jpg"
    },
    {
        name: "8",
        img: "images/8.jpg"
    },
    {
        name: "9",
        img: "images/9.jpg"
    },
    {
        name: "10",
        img: "images/10.jpg"
    },
    {
        name: "11",
        img: "images/11.jpg"
    },
    {
        name: "12",
        img: "images/12.jpg"
    },
    {
        name: "1",
        img: "images/1.jpg"
    },
    {
        name: "2",
        img: "images/2.jpg"
    },
    {
        name: "3",
        img: "images/3.jpg"
    },
    {
        name: "4",
        img: "images/4.jpg"
    },
    {
        name: "5",
        img: "images/5.jpg"
    },
    {
        name: "6",
        img: "images/6.jpg"
    },
    {
        name: "7",
        img: "images/7.jpg"
    },
    {
        name: "8",
        img: "images/8.jpg"
    },
    {
        name: "9",
        img: "images/9.jpg"
    },
    {
        name: "10",
        img: "images/10.jpg"
    },
    {
        name: "11",
        img: "images/11.jpg"
    },
    {
        name: "12",
        img: "images/12.jpg"
    }
]

startButton.addEventListener("click", function() {
    startScreen.style.display = "none";
    startScreen.style.height = "0vh";
    gameScreen.style.display = "flex";
});

cardArray.sort(() => 0.5 - Math.random())

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')

    if(cardsChosenIds[0] == cardsChosenIds[1]) {
        alert('You have clicked on the same image!')
        cards[cardsChosenIds[0]].setAttribute('src', 'images/blank.jpg')
    }else if(cardsChosen[0] == cardsChosen[1]) {
        attempts = attempts + 1
        alert('You found a match')
        cards[cardsChosenIds[0]].setAttribute('src', 'images/white.jpg')
        cards[cardsChosenIds[1]].setAttribute('src', 'images/white.jpg')
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard)
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
        resultDisplay.textContent = attempts
    } else {
        attempts = attempts + 1
        cards[cardsChosenIds[0]].setAttribute('src', 'images/blank.jpg')
        cards[cardsChosenIds[1]].setAttribute('src', 'images/blank.jpg')
        alert('Sorry try again!')
        resultDisplay.textContent = attempts
    }
    
    cardsChosen = []
    cardsChosenIds = []

    if(cardsWon.length == cardArray.length / 2) {
        if(previousBest == 0) {
            previousBest = attempts
            highScore.textContent = previousBest
            
        }
        if(attempts < previousBest){
            previousBest = attempts
            highScore.textContent = previousBest
        }
        displayOutcome.textContent = 'Congratulations you have found them all! Would you like to play again?'
        playAgain.style.display = 'flex'
    }
}

function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2) {
        setTimeout(checkMatch, 100)
    }
}

playAgain.addEventListener("click", function() {
    playAgain.style.display = "none";
    startScreen.style.height = "0vh";
    cardsChosen = []
    cardsChosenIds = []
    cardsWon = []
    displayOutcome.textContent = ''
    gridDisplay.textContent = ''
    resultDisplay.textContent = 0
    attempts = 0
    cardArray.sort(() => 0.5 - Math.random())
    createBoard()
});