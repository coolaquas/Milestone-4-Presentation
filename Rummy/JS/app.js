function ready(){
    createDeck(game); // 52 sorted card.
    shuffle(game); //52 cards unsorted.
    deal(game); // Game = 52; POP 13 cards and pushed it to Hand; hand = 13
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            location.reload();
        });
    });
}


//Create a Deck of 52 cards. // Unit Test Done
function createDeck(deck){
    if(Array.isArray(deck)){
    for(let i=0; i < suits.length;i++){
        for(let j=0; j<values.length;j++){
                deck.push(suits[i]+ values[j]);
            }
        }
    return deck;
    } else {
        return false;
    }
}
// Shuffle the deck
function shuffle(deck){                                              // Fisher-Yates Shuffle Algorithm
     let counter = deck.length, temp, i;
     while(counter){
         i = Math.floor(Math.random() * counter--) ; 
         temp = deck[counter]; 
         deck[counter] = deck[i];
         deck[i] = temp;
     }  
    return deck;     
}

//Start to deal 13 cards 
function deal(deck){
    while(hand.length < 13 ) {
        hand.push(deck.pop());
    }
}

//Display cards in hand
function dispHand(){
    if(hand.length > 11){
    for(let i = 0; i< hand.length ; i++ ){
        let cardElement = ("card-" + (i+1));
        let imgUrl = "./Images/Cards/"+hand[i]+ ".png";
        $(`#${cardElement}`).css({"background-image": "url(" + imgUrl + ")", "background-repeat": "no-repeat", "background-size": "cover"});
        $(`#${cardElement}`).animate({opacity: "1"} , "slow");
    };
}
// } else {
//     $(.card).css({"display:none"});
// }
}

//Joker card specification.
function joker (){
    jokerCard = game.pop();
    let imgUrl = "./Images/Cards/"+jokerCard+ ".png";
    $("#jokerCard").css({"background-image": "url(" + imgUrl + ")", "background-repeat": "no-repeat", "background-size": "cover"});
}

//card click event action in hand
function cardClick(){
    let cardPlace = $(".card"); 
    for(let i = 0; i<cardPlace.length;i++){
        $(cardPlace[i]).click(function () {
            if(hand.length === 13) {
            floatCard.push(hand[i]);
            let imgUrl = "./Images/Cards/"+floatCard[floatCard.length-1]+ ".png";
            $("#openDeck").css({"display": "block"});
            $("#openDeck").animate({opacity: ".2"});
            $("#openDeck").animate({opacity: "1"} , "slow");
            $("#openDeck").css({"background-image": "url(" + imgUrl + ")", "background-repeat": "no-repeat", "background-size": "cover"});
            hand.splice(i, 1);
            $("#card-13").css({"background-image": ""});
            dispHand();
            };
        });
    };
}

//Close deck click event action
function closeDeck (){
    hand.push(game.pop());
}

//Open deck click event action
function openDeck(){
    hand.push(floatCard.pop());
    if(floatCard.length > 0){
    let imgUrl = "./Images/Cards/"+floatCard[floatCard.length-1]+ ".png";
    $("#openDeck").animate({opacity: ".2"});
    $("#openDeck").animate({opacity: "1"} , "slow");
    $("#openDeck").css({"background-image": "url(" + imgUrl + ")", "background-repeat": "no-repeat", "background-size": "cover"});
    } else {
        $("#openDeck").css({"display": "none"});
    }
}


function setFinder(deck){ //checks sets from a deck
    let temp= [], t1 = [];
    for(var idx in deck){
    temp.push(deck[idx].substring(1, 3));
    }
    filtered = temp.filter(function (a) {
        return this[a] <= 2;
    }, temp.reduce(function (r, a) {
        r[a] = (r[a] || 0) + 1;
        return r;
    }, {}));
for(i=0;i<temp.length;i++){
    loop1:
        for(j=0;j<filtered.length;j++){
            if(temp[i] == filtered[j]){
                t1.push(deck[i]);
                break loop1;
            }
    
        }
    }
    deck = t1;
    return (deck);
}

// class Card {
    // constructor(suits, values) {
        // this.suits = suits;
        // this.values = values;
    // }
// }
// class Deck {
    // constructor(){
        // this.deck = [];
    // }
    // createDeck(suits,values){
        // for(let suit of suits){
            // for(let value of values){
                // this.deck.push(new Card(suit,value));
            // }
        // }
        // return this.deck;
    // } //52 cards

    // shuffle (){                                              // Fisher-Yates Shuffle Algorithm
        //  let counter = this.deck.length, temp, i;
        //  while(counter){
            //  i = Math.floor(Math.random() * counter--) ; 
            //  temp = this.deck[counter]; 
            //  this.deck[counter] = this.deck[i];
            //  this.deck[i] = temp;
        //  }  
        // return this.deck;      
    // }

    // deal (){
        // let hand = [];
        // while(hand.length < 13 ) {
            // hand.push(this.deck.pop());
        // }
        // // console.log(this);
        // // for(let i = 0; i< hand.length ; i++ ){
        // //     let cardElement = ("card-" + (i+1));
        // //     let imgUrl = "./Images/Cards/"+hand[i].values+""+hand[i].suits + ".png";
        // //     $(`#${cardElement}`).css({"background-image": "url(" + imgUrl + ")", "background-repeat": "no-repeat", "background-size": "cover"});
        // // }
        // return hand;
    // }
    
    // closeDeck(){
        // let hand = this.deal();
        // // if( hand === 13){
        // // hand.push(this.deck.pop());
        // // }
    // return hand;
    // }
// }

// let suits = ["H", "D"]; // for test
// let values = [2,3,4]; // for test
// module.exports = createDeck;