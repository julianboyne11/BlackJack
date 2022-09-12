/*------------------- Constants --------------------*/
/*------------------- Constants --------------------*/

const deck =  ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]

/*---------------- Variables (state) --------------*/
let turn, credits, winner, bet, shuffleDeck
let playerHand= []
let computerHand = []


/*---------- Cached Element References -------------*/
const cardContainer = document.querySelector(".container")

const totalCredits = document.querySelector("#total-credit")
const playSection = document.querySelector(".play-section")
const betSection = document.querySelector(".bets")
const playerCard = document.querySelector("#player-card")
const deckEl = document.querySelector("#deck")
const computerCard = document.querySelector("#computer-section")
const placeBet = document.querySelector("#place-bet")
const cashBtn = document.querySelector("#cash-out-button")
const betBtn = document.querySelector("#bet-button")
const increaseBtn = document.querySelector("#increase-bet")
const decreaseBtn = document.querySelector("#decrease-bet")
const hitBtn = document.querySelector("#hit-button")
const stayBtn = document.querySelector("#stay-button")


/*---------------- Event Listeners------------------*/

cashBtn.addEventListener("click", cashOut)

betBtn.addEventListener("click", enterBet)

hitBtn.addEventListener("click", renderHit)

increaseBtn.addEventListener("click", betMore)

decreaseBtn.addEventListener("click", betLess)

/*------------------ Functions ---------------------*/

init()


////Add some state variables called:

//1- Winner to determine the winner of the hand

//2- Turn to check who’s turn is it

//3- Deck to represent the cards

//4-Credits to represent the amount of credits you have

//5-Hand1 to represent the player’s hand

// 6-Hand2 to represent the computer’s hand



////Store catch elements references



//Create a function called “init” to initialize the game
function init() {  

  shuffleDeck = shuffle(deck)
  
  playerHand = []

  turn = 1

  computerHand = []

  totalCredits.textContent = `Total Credits: ${credits = 900}`

  placeBet.textContent = `Place your Bet!: ${bet = 100}`


  playSection.setAttribute("hidden", "")

  betSection.removeAttribute("hidden")

  winner = null

  render()
  
}


function newHand(card) {
  let givePlayerCard = shuffleDeck.splice(0, 2)     
  console.log(givePlayerCard);
    playerHand.push(givePlayerCard)
    console.log(playerHand, "player");

  let giveComputerCard = shuffleDeck.splice(0, 2)
  console.log(giveComputerCard);
    computerHand.push(giveComputerCard)
    console.log(computerHand, "computer");
  
  //add two cards into the computerHand
  //add two cards into the playerHand
}

////It show your available credits

/////The bet that you want to make

////It show a cash out to leave the table

////call a function called “render” to render the game

//Create a render function
function render() {

  placeBet.textContent = `Please enter Bet! The current bet is: ${bet}`

  totalCredits.textContent = `Total Credits: ${credits}`

  // if(turn === 1) {
  //   playerCard.appendChild(newCard)
  // } else if (turn === -1) {
  //   computerCard.appendChild(newCard)
  // }

  
}

// function appendCard(card) {
//   let newCard = document.createElement("div")
//   newCard.classList.add("card")
  
//   render()
// } 

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function renderHit(card, idx) {
  if(deck.length > 0) {
    
    
    let cardHit = shuffleDeck.splice(0, 1)   
    
    playerHand.push(cardHit)
    console.log(playerHand)
    
    // let newCard = document.createElement("div")
    // if(playerHand > 1) {
    // newCard.classList.add("container", cardHit)
    // cardContainer.appendChild(newCard)
    // }
    render()
  }
}





////-hides the betting function once you place a bet and reduce your total credits

//// -renders a card shuffling function

//renders if you “hit” card and add card to your hand

//render if you “stay” and should give the turn to the computer

//render the total amount of your card value

//render winner

//

//Create an Object called “cards” and add the different card and their respective values 

//

function enterBet(evt) {
  placeBet.textContent = `Total Bet: ${bet}`
  increaseBtn.setAttribute("hidden", "")
  decreaseBtn.setAttribute("hidden", "")
  betBtn.setAttribute("hidden", "")
  playSection.removeAttribute("hidden")
  newHand()
  render()
  
} 
//Create a Betting function

function betMore (evt) {
  if(bet < credits) {
    bet += 5
    credits -= 5
  }
  render()
}

function betLess(evt) {
  if(bet > 0) {
    bet -= 5
    credits += 5
  }
  render()
}



//That every time you want to bet more it reduce your total amount of credits

//And when you want to bet less, it increases your total amount of credits

//render()


//Add a hit function 

//Whenever you click hit, it push a card to your hand

//render


//Add a stay function

//Whenever you click stay, it changes the turn until there’s a winner



//add a winner function

//create a BlackJack combo

//check the total amount of each hand 

//if the player has more than 21, automatically return because you loose

//if computer > than player, return player loose

//if the player has === blackjack && computer !== blackjack, return player winner

//if player > than computer, player win
function cashOut(evt) {
  init()
  betBtn.removeAttribute("hidden")
  
}
