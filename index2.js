let player = {
    Name: "Bhagyashree",
    Chips: 250
}

let cards = []
let sum = 0

let hasBlackjack = false

let isAlive = false

let message = ""

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1

    if (randomCard > 10) {
        return 10
    } else if (randomCard === 1) {
        return 11
    } else {
        return randomCard
    }
}


function start() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
    document.getElementById("player-el").textContent = player.Name + ": $" + player.Chips
    renderGame()
}

function renderGame() {

    document.getElementById("sum-el").textContent = "Sum: " + sum
    document.getElementById("cards-el").textContent = "Cards:  "

    for (let i = 0; i < cards.length; i++) {
        document.getElementById("cards-el").textContent += cards[i] + " , "
    }

    if (sum <= 20) {
        message = "Do you want to draw another card?"
    } else if (sum === 21) {
        message = "You have got blackjack!"
        hasBlackjack = true
    } else {
        message = "you are out of the game!"
        isAlive = false
    }

    document.getElementById("message-el").textContent = message
}

function newCard() {

    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    }
}