/*------------------- Constants --------------------*/
/*------------------- Constants --------------------*/

const deck =  ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]

// const blackJack = [
//   ["dA", "dK"],
//   ["dA", "dQ"],
//   ["dA", "dJ"],
//   ["hA", "hQ"],
//   ["hA", "hK"],
//   ["hA", "hJ"],
//   ["cA", "cQ"],
//   ["cA", "cK"],
//   ["cA", "cJ"],
//   ["sA", "sQ"],
//   ["sA", "sK"],
//   ["sA", "sJ"]
// ]




/*---------------- Variables (state) --------------*/
let turn, credits, winner, bet, shuffleDeck, dealerSum, playerSum
let playerHand= []
let computerHand = []



/*---------- Cached Element References -------------*/
const cardContainer = document.querySelector(".container")
const dealerTotal = document.querySelector("#computer-sum")
const playerTotal = document.querySelector("#player-sum")

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
const messageEl = document.querySelector("#message")



/*---------------- Event Listeners------------------*/

cashBtn.addEventListener("click", cashOut)

betBtn.addEventListener("click", enterBet)

hitBtn.addEventListener("click", renderHit)

increaseBtn.addEventListener("click", betMore)

decreaseBtn.addEventListener("click", betLess)

stayBtn.addEventListener("click", stay)

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



////Create a function called “init” to initialize the game
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
  givePlayerCard.forEach(card => {
    playerHand.push(card)
    console.log(givePlayerCard);
    
  })   
  console.log(playerHand, "player");
  
  let giveComputerCard = shuffleDeck.splice(0, 2)
  giveComputerCard.forEach(card => {
    computerHand.push(card)
    console.log(giveComputerCard);
  })
  console.log(computerHand, "computer");

  winner = getWinner()
  
  ////add two cards into the computerHand
  ////add two cards into the playerHand
  render()
}

////It show your available credits

/////The bet that you want to make

////It show a cash out to leave the table

////call a function called “render” to render the game

////Create a render function
function render() {
  
  playerCard.innerHTML= ""
  
  computerCard.innerHTML= ""
  
  placeBet.textContent = `Please enter Bet! The current bet is: ${bet}`
  
  totalCredits.textContent = `Total Credits: ${credits}`
  
  playerHand.forEach(card => {
    let newCard = document.createElement("div")
    newCard.classList.add("card", "large", card)
    playerCard.appendChild(newCard)
  })
  
  computerHand.forEach(card => {
    let newCard = document.createElement("div")
    newCard.classList.add("card", "large", card)
    computerCard.appendChild(newCard)
  })
  if (winner === null) {
    messageEl.textContent = `Choose if You want to Hit or Stay`
  } 
  


  playerTotal.textContent = `${checkCardValue(playerHand)}`

  dealerTotal.textContent = `${checkCardValue(computerHand)}`


  
  
}



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
  
  ////Add a hit function 
  
  ////Whenever you click hit, it push a card to your hand
  function renderHit(card, idx) {
    if(deck.length > 0) {
      
      
      let cardHit = shuffleDeck.splice(0, 1)[0]  
      
      playerHand.push(cardHit)
      console.log(playerHand)

      dealerSum = checkCardValue(computerHand)
      console.log(dealerSum);
      playerSum = checkCardValue(playerHand)
      console.log(playerSum);
      winner = getWinner()
      render()
    }
  }
  

  
  function checkCardValue(cards) {
    let handTotal = 0
    cards.forEach(card => {
    let cardValue = card.slice(1, 3)

    if(cardValue === "A") {
        handTotal += 11
      } else if(cardValue === "K") {
        handTotal += 10
      } else if(cardValue === "Q") {
        handTotal += 10
      } else if(cardValue === "J") {
        handTotal += 10
      } else {
        
      handTotal += parseInt(cardValue)
      }  
    })
  return handTotal

  
}












////-hides the betting function once you place a bet and reduce your total credits

//// -renders a card shuffling function

////renders if you “hit” card and add card to your hand

//render if you “stay” and should give the turn to the computer

////render the total amount of your card value

//render winner

//

////Create an Object called “cards” and add the different card and their respective values 

//
//Create a Betting function

function enterBet(evt) {
  placeBet.textContent = `Total Bet: ${bet}`
  increaseBtn.setAttribute("hidden", "")
  decreaseBtn.setAttribute("hidden", "")
  betBtn.setAttribute("hidden", "")
  playSection.removeAttribute("hidden")
  newHand()
  render()
  
} 

//That every time you want to bet more it reduce your total amount of credits
function betMore (evt) {
  if(bet < credits) {
    bet += 5
    credits -= 5
  }
  render()
}


//And when you want to bet less, it increases your total amount of credits
function betLess(evt) {
  if(bet > 0) {
    bet -= 5
    credits += 5
  }
  render()
}




//render()



//render


//Add a stay function

//Whenever you click stay, it changes the turn until there’s a winner

function stay(evt) {
  turn = -1
  let dealerSum = checkCardValue(computerHand)
      console.log(dealerSum);
      let playerSum = checkCardValue(playerHand)
      console.log(playerSum);
      // let player = turn === 1 ? 'Player' : 'Dealer'
      // messageEl.textContent = `${winner === "T" ? "It's a tie!" : "Congrats! " + player + " won!"}`
      getWinner()
    }
    
    //add a winner function
    
  function getWinner() {

    if(playerSum > 21) {
      messageEl.textContent = "You Lose the Hand!"
      bet -= bet
    } else if(dealerSum > 21) {
      messageEl.textContent = "You Win the Hand!"
      credit += bet *= 2
    } 


    //we want to check every posible blackJack and if there's a blackJack on one of the hand return winner
    
    //if playerSum > 21 automatically return a lose and vicerversa 
    
    
    
    
  }
  function getBlackJackWinner(cards) {
  let blackJackHand = null
  cards.forEach(card => {
    let cardValue = card.slice(1, 3)
    console.log(cardValue);
    if(cardValue === "A" && "J" || cardValue === "J" && "A" || cardValue === "A" && "K" || cardValue === "K" && "A" || cardValue === "A" && "Q" || cardValue === "Q" && "A" ){
      winner = turn
    }
  })
  return blackJackHand
}
  
  //if playerSum > than dealerSum, winner = player
  //if playerSum < than dealerSum, winner = dealer
  //if both hands have blackJack, return "T"
  


////create a BlackJack combo

//check the total amount of each hand 

////if the player has more than 21, automatically return because you loose

//if computer > than player, return player loose

//if the player has === blackjack && computer !== blackjack, return player winner

//if player > than computer, player win
function cashOut(evt) {
  init()
  betBtn.removeAttribute("hidden")
  
}
