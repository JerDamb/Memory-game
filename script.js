document.addEventListener('DOMContentLoaded', () => {

    //card options

    const cardArray = [{
            name: 'astronaut',
            img: 'images/astronaut.png'
        },
        {
            name: 'cat',
            img: 'images/cat.png'
        },
        {
            name: 'kame',
            img: 'images/kame.png'
        },
        {
            name: 'logo',
            img: 'images/logo.png'
        },
        {
            name: 'monkey',
            img: 'images/monkey.png'
        },
        {
            name: 'tree',
            img: 'images/tree.png'
        },
        {
            name: 'astronaut',
            img: 'images/astronaut.png'
        },
        {
            name: 'cat',
            img: 'images/cat.png'
        },
        {
            name: 'kame',
            img: 'images/kame.png'
        },
        {
            name: 'logo',
            img: 'images/logo.png'
        },
        {
            name: 'monkey',
            img: 'images/monkey.png'
        },
        {
            name: 'tree',
            img: 'images/tree.png'
        }
    ]


    //Rangement aléatoire des éléments de cardArray[]
    cardArray.sort(() => 0.5 - Math.random())


    //Variables
    const grid = document.querySelector('.grid')
    const resetButton = document.getElementById('reset-button')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    const cardsWon = []

    //Creation de la board des cartes
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }


    //Fonction qui regarde sur la première carte sélectionné correspond a la seconde
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert('Tu as cliqué sur la même image')
        } else if (cardsChosen[0] === cardsChosen[1]) {
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
        }
        cardsChosen = []
        cardsChosenId = []
        // resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Félicitation tu as trouvé toute les paires!'
            resetButton.style.display = 'block'
            timer = clearInterval(timer)
        }
    }


    //Animation de retournement de carte en fonction des cartes sélectionnées
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 300)
        }
    }

    //Fonction pour relancer une partie
    resetButton.onclick = function reset (){
        window.location.reload()
    }

    createBoard()
})


//Création du timer
let timer = setInterval(countTime, 1000)
let sec = 0
let min = 0
let hour = 0

function countTime() {
    sec++

    if (sec === 60) {
        sec = 0
        min++
    }
    if (min === 60) {
        min = 0
        hour++
    }
    displayTime()
}


//Toutes les valeurs < 10 pour le timer prennent un 0 en plus
function displayTime() {
    let secondes = sec
    let minutes = min
    let hours = hour
    let timeElement = document.getElementById('timer')

    if (secondes < 10) {
        secondes = "0" + sec
    }
    if (minutes < 10) {
        minutes = "0" + min
    }
    if (hours < 10) {
        hours = "0" + hour
    }
    timeElement.innerHTML = 'Temps: ' + hours + ':' + minutes + ':' + secondes
}