// player 1
let randomNumber1 = Math.floor(Math.random(0, 1) * 6) + 1
const player1Dice = document.querySelector("img")
player1Dice.src = `/images/dice${randomNumber1}.png`

// player 2
let randomNumber2 = Math.floor(Math.random(0, 1) * 6) + 1
const player2Dice = document.querySelector("#dice2")
player2Dice.src = `/images/dice${randomNumber2}.png`

// refresh me text
const h1 = document.querySelector("h1")

if (randomNumber1 == randomNumber2) {
  h1.innerText = "Draw"
} else if (randomNumber1 > randomNumber2) {
  h1.innerHTML = "🚩 Player 1 Wins!"
} else {
  h1.innerHTML = "Player 2 Wins! 🚩"
}
