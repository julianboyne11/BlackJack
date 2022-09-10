/*------------------- Constants --------------------*/


/*---------------- Variables (state) --------------*/
let turn, credits, winner, bet
let deck = []
let playerHand= []
let computerHand = []


/*---------- Cached Element References -------------*/
const playSection = document.querySelector(".play-section")
const betSection = document.querySelector(".bets")
const playerCard = document.querySelector("#player-section")
const deckEl = document.querySelector("#deck")
const computerCard = document.querySelector("#computer-section")
const cashBtn = document.querySelector("#cash-out-button")
const betBtn = document.querySelector("#bet-button")
const increaseBtn = document.querySelector("#increase-bet")
const decreaseBtn = document.querySelector("#decrease-bet")
const hitBtn = document.querySelector("#hit-button")
const stayBtn = document.querySelector("#stay-button")


/*---------------- Event Listeners------------------*/

cashBtn.addEventListener("click", cashOut)

betBtn.addEventListener("click", placeBet)



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

  

  deck =  ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]

  credits = 1000
  document.querySelector("#total-credit").textContent = `Total Credits: ${credits = 1000}`

  bet = 100
  document.querySelector("#place-bet").textContent = `Place your Bet: ${bet = 100}`

  playSection.setAttribute("hidden", "")





  

  render()
  
}

////It show your available credits

/////The bet that you want to make

////It show a cash out to leave the table

////call a function called “render” to render the game

//Create a render function
function render() {
  
  
  

}


//-hides the betting function once you place a bet and reduce your total credits

//-renders a card shuffling function

//renders if you “hit” card and add card to your hand

//render if you “stay” and should give the turn to the computer

//render the total amount of your card value

//render winner

//

//Create an Object called “cards” and add the different card and their respective values 

//

//Create a Betting function
function placeBet(evt) {
  console.log(evt.target, "clicked");
  betSection.setAttribute("hidden", "")
  playSection.removeAttribute("hidden")
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
  betSection.removeAttribute("hidden")
