// Create an Array of at least 3 losing messages
var loserAlert = [
  'Uhhhh, you should try again...',
  'That was really your best guess?',
  'Oh, so close... still not it tho.'
]

// Create variables to count wins and losses
var winCount = 0
var loseCount = 0

// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'
var messageText = document.getElementById('message');
var wins = document.getElementById('wins');
var losses = document.getElementById('losses');

// target all .box elements and attach a click event listener to each one using a loop
var boxSelector = document.querySelectorAll('.box')

// within each click event...
// determine which box was clicked with 'this.textContent' or event.target.textContent
// convert that// value to a Number and store it to a variable

// create a random number between 1-3 and store it to a variable
// This number will represent the winning box

// determine if the box clicked is equal to the random number
// if the numbers match, display a winning message by changing the text content of the div#message element
// if the numbers match, increment wins and display the win count in div#wins

// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses


function boxClick(event) {
  var boxClicked = (parseInt(this.textContent))
  
  var winner = Math.floor((Math.random()* 3) +1);

  if (winner === boxClicked) {
    messageText.textContent = 'WINNER'
    winCount = ++winCount
    wins.textContent = "Wins: " + winCount
  }

  else {
    messageText.textContent = loserAlert[Math.floor(Math.random() * 3)];
    loseCount = ++loseCount
    losses.textContent = "Losses: " + loseCount
  }
}

for (i = 0; i < boxSelector.length; i++) {
  var box = boxSelector[i];
box.onclick = boxClick
}