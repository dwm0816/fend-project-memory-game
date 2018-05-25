/*
 * Create a list that holds all of your cards
 */

var deck = [];

var array = [
        "a1",
        "a2",
        "b1",
        "b2",
        "c1",
        "c2",
        "d1",
        "d2",
        "e1",
        "e2",
        "f1",
        "f2"
    ]


function deckList(){
    // for (var i = 1; i < 36; i++) {
        let cad = document.querySelectorAll('.card')
        deck.push(cad);
    // }
}



deckList();
console.log(deck)




/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// var arr = [2, 11, 37, 42];
// arr = shuffle(arr);
// console.log(arr);


deck = shuffle(deck);
console.log(deck);


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
const refresh = document.querySelector('.restart');
refresh.addEventListener('click', function(){
   console.log('CLicked!') 
});