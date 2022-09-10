/*------------------- Constants --------------------*/


/*---------------- Variables (state) --------------*/
let turn, credits, winner, bet
let deck = []
let playerHand= []
let computerHand = []


/*---------- Cached Element References -------------*/
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
  credits = 1000
  document.querySelector("#total-credit").textContent = `Total Credits: ${credits = 1000}`
  
  bet = 100
  document.querySelector("#place-bet").textContent = `Place your Bet: ${bet = 100}`

  render()
  
}

////It show your available credits

/////The bet that you want to make

////It show a cash out to leave the table

//call a function called “render” to render the game

//

//Create a render function

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
