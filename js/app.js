/*
 * Create a list that holds all of your cards
 */

var deck = [];
var turn = 0;
var began = false;
var eventType;
var active = 0;
var suitA;
var suitB;
var open;

function flip(hitTarget){
        hitTarget.classList.toggle('open'); hitTarget.classList.toggle('show');
        
        if (active < 1){
            suitA = hitTarget.firstElementChild;
            active = active + 1;
            
        } else if (active < 2){
            suitB = hitTarget.firstElementChild;
            active = active + 1;
            suitChecker()
        }else if (active => 2){
            suitA = null; suitB = null;
            active = 0;
        }
        
        if (turn => 10) {
            starCounter();
        }
}



function suitChecker(){
    if (suitA === suitB){
        
    }
}



function starCounter(){
        if (turn === 10) {
            const starCounter = document.querySelector('.stars');
            const star = starCounter.firstElementChild;
            starCounter.removeChild(star);
            
        } else if (turn === 15){
            const starCounter = document.querySelector('.stars');
            const star = starCounter.firstElementChild;
            starCounter.removeChild(star);
        
        } else if (turn > 19){
            const starCounter = document.querySelector('.stars');
            const star = starCounter.firstElementChild;
            starCounter.removeChild(star);
            alert('GAME OVER');
            location.reload(true);
        }
}

function deckList(){
    for (let i = 0; i < 16; i++) {
        let cad = document.querySelector('.card');
        deck.push(cad); cad.remove();
    }
} deckList();

function draw(){
    for (let i = 0; i < 16; i++){
        const deckHead = document.querySelector('.deck');
        deckHead.appendChild(deck[i]);
    }
}

console.log(deck)


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

deck = shuffle(deck); draw();

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
   location.reload(false);
});

document.querySelector('.deck').addEventListener('click', function(trueCheck){
    let hitClick = event.target
    if (trueCheck.target.nodeName === 'LI'){
        flip(hitClick);
        turn = turn + 1;
    }
});

if (began === false) {
    setTimeout(function beginFlip(){
        for (let i = 0; i < 16; i++){
            let hitClick = deck[i];
            flip(hitClick);
        }
    }, 5000);
}

//Star time!
