/*------------------- Constants --------------------*/

const deck =  ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]

/*---------------- Variables (state) --------------*/

let turn, credits, winner, bet, shuffleDeck, loser, push, dealerSum, playerSum, blackjack
let playerHand= []
let computerHand = []
let hiddenCard = document.createElement("div")

/*---------- Cached Element References -------------*/

const cardContainer = document.querySelector(".container")
const dealerTotal = document.querySelector("#computer-sum")
const playerTotal = document.querySelector("#player-sum")
const nextHandBtn = document.querySelector("#next-hand")
const totalCredits = document.querySelector("#total-credit")
const playSection = document.querySelector(".play-section")
const betSection = document.querySelector(".bets")
const playerCard = document.querySelector("#player-card")
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

nextHandBtn.addEventListener("click", nextHand)

/*------------------ Functions ---------------------*/


init()


function init() {  
  
  shuffleDeck = shuffle(deck)

  playerHand = []
  
  turn = 1
  
  computerHand = []
  
  totalCredits.textContent = `Total Credits: ${credits = 1000}`
  
  placeBet.textContent = `Place your Bet!: ${bet = 100}`

  dealerTotal.setAttribute("hidden", "")
  
  playSection.setAttribute("hidden", "")

  betSection.removeAttribute("hidden")

  increaseBtn.removeAttribute("hidden")

  decreaseBtn.removeAttribute("hidden")

  betBtn.removeAttribute("hidden")
  
  winner = null

  loser = null

  push = null

  blackjack = null

  messageEl.textContent = "Place Your bet!"
  
  render()
  
}

function reInit() {

  shuffleDeck = shuffle(deck)
  console.log(shuffleDeck);
  playerHand = []
  
  turn = 1
  
  computerHand = []
  
  totalCredits.textContent = `Total Credits: ${credits}`
  
  placeBet.textContent = `Place your Bet!: ${bet = 100}`
  
  dealerTotal.setAttribute("hidden", "")
  
  playSection.setAttribute("hidden", "")

  betSection.removeAttribute("hidden")
  
  winner = null

  loser = null

  push = null

  blackjack = null

  messageEl.textContent = "Place Your bet!"

  hitBtn.removeAttribute("hidden")

  increaseBtn.removeAttribute("hidden")

  decreaseBtn.removeAttribute("hidden")

  betBtn.removeAttribute("hidden")

  render()
  
}


function newHand(card) {
  
  let givePlayerCard = shuffleDeck.splice(0, 2)
  givePlayerCard.forEach(card => {
    playerHand.push(card) 
  }) 
  let giveComputerCard = shuffleDeck.splice(0, 1)
  giveComputerCard.forEach(card => {
    computerHand.push(card)
  })

  render()
}


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
  
  // let hiddenCard = computerHand[0]

  for (let i = 0; i < computerHand.length; i++) {
    let newCard = document.createElement("div")
    hiddenCard.classList.add("card", "large", "back-blue", computerHand[i])
    newCard.classList.add("card", "large", computerHand[i])
    computerCard.appendChild(hiddenCard)
    computerCard.appendChild(newCard)

  
    console.log(computerHand, "Dealer");

    
  }
  

  dealerTotal.textContent = `${checkCardValue(computerHand)}`
  
  playerTotal.textContent = `${checkCardValue(playerHand)}`

  if(winner) {
    renderMess()
  } else if(loser) {
    renderMess()
  } else if(blackjack){
    renderMess()
  } else{
    renderMess()
  } if(credits < 0) {
    renderMess()
  }
}


function renderMess() {
  let winBet = bet * 2
  let winBlackjack = bet * 3 
  if(winner) {
    messageEl.textContent = "You win the Hand!"
    credits += winBet
  } if(blackjack) {
    messageEl.textContent = "Blackjack!!"
    credits += winBlackjack
  }
  if(loser) {
    messageEl.textContent = "You lose the Hand!"
  }
  if(push) {
    messageEl.textContent = "Push!"
    bet = bet
  } 
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
  

  function renderHit(card, idx) {
    if(deck.length > 0) {
      
      let cardHit = shuffleDeck.splice(0, 1)[0]  
      
      playerHand.push(cardHit)

      dealerSum = checkCardValue(computerHand)
      
      playerSum = checkCardValue(playerHand)
      
      if(playerSum > 21) {
        loser = true
        hitBtn.setAttribute("hidden", "")
        stayBtn.setAttribute("hidden", "")
      }
      render()
    }
  }

  
  function checkCardValue(cards) { 
    let aceCount = 0
    let handTotal = 0
    cards.forEach(card => {
      let cardValue = card.slice(1, 3)
  
      if(cardValue === "A") {
      
        handTotal += 11
        aceCount += 1
      }  
      else if(cardValue === "K") {
        handTotal += 10
      } else if(cardValue === "Q") {
        handTotal += 10
      } else if(cardValue === "J") {
        handTotal += 10
      } 
      else {
        handTotal += parseInt(cardValue)
      }
      while(aceCount >= 1 && handTotal > 21){
        aceCount -= 1
        handTotal -= 10
      }
    }) 
    return handTotal
  }
  

function enterBet(evt) {
  increaseBtn.setAttribute("hidden", "")
  decreaseBtn.setAttribute("hidden", "")
  betBtn.setAttribute("hidden", "")
  playSection.removeAttribute("hidden")
  newHand()
  messageEl.textContent = "Hit or Stay?"
  dealerSum = checkCardValue(computerHand)
  playerSum = checkCardValue(playerHand)
  credits -= bet
  if(playerSum === 21 && dealerSum !== 21) {
    blackjack = true
    stayBtn.setAttribute("hidden", "")
    hitBtn.setAttribute("hidden", "")
  } if(playerSum !== 21 && dealerSum === 21) {
    blackjack = true
    stayBtn.setAttribute("hidden", "")
    hitBtn.setAttribute("hidden", "")
  } if(playerSum === 21 & dealerSum === 21) {
    push = true
    stayBtn.setAttribute("hidden", "")
    hitBtn.setAttribute("hidden", "")
  }
  render() 
} 

//That every time you want to bet more it reduce your total amount of credits
function betMore (evt) {
  if(bet < credits) {
    bet += 50
  } if(credits <= 0) {
    bet += 10
  }
  render()
}


//And when you want to bet less, it increases your total amount of credits
function betLess(evt) {
  if(bet > 0) {
    bet -= 50
  }
  render()
}



function stay(evt) {
  dealerSum = checkCardValue(computerHand)

  playerSum = checkCardValue(playerHand)

  dealerTotal.removeAttribute("hidden")
  
  // hiddenCard.remove()

  hitBtn.setAttribute("hidden", "")

  stayBtn.setAttribute("hidden", "")

  dealer()
  
  renderWin()

  renderLoss()
  
  renderPush() 
  
  render()

  
}  
  
  function dealer() {
    while (dealerSum < 17) {
      let cardHit = shuffleDeck.splice(0, 1)[0]  
      computerHand.push(cardHit)
      dealerSum = checkCardValue(computerHand)
    }  
  }


  function renderWin() {
    if (dealerSum > 21) {
      winner = true
    }
    if(playerSum > dealerSum) {
      winner = true
    } 
  }

  function renderLoss() {
    if(dealerSum <= 21 ) {
      if(dealerSum > playerSum ) {
      loser = true
      }
    }
  }

  function renderPush() {
    if(playerSum === dealerSum) {
      push = true
    }
  }


function nextHand(evt) {
  reInit()
  betBtn.removeAttribute("hidden")
  hitBtn.removeAttribute("hidden")
  stayBtn.removeAttribute("hidden")
}

function cashOut(evt) {
  init()
  betBtn.removeAttribute("hidden")
  hitBtn.removeAttribute("hidden")
  stayBtn.removeAttribute("hidden")
  
}
