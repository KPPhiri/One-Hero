//Object Constructors
function Character(name, imgURL, propertyType) {
this.name = name;
this.imgURL =imgURL;
this.propertyType = propertyType;
}

function Action(name, imgURL, cost, ability, isWildCard) {
	this.name = name,
this.imgURL = imgURL;
This.cost = cost;
This.abiltiy = ability;
this.isWildCard = isWildCard
}

function Player(charIndex) {
  this.playerChar = charCards[charIndex];
}

Player.prototype = {
  constructor: Player,
  deckDraw: function() {
  	  return actionDeck[Math.floor(Math.random() * actionDeck.length)];
  },
  playCard: function() {
  	playerPoints -= actionDeck[choiceIndex].cost;
  	 actionDeck[choiceIndex].ability();
  }
}

//Initializing and declaring deck arrays
var charDeck = [new Character("Bob", "img/bob.jpg"), new Character("Jane", "img/jane.jpg"), new Character("Vince", "img/bob.jpg")];

//var actionDeck = [action1, action1, action3, action4 … ]


//adding characters
document.getElementById('character').src = "img/vince.jpg";
document.getElementById('opponent').src = "img/jane.jpg";
