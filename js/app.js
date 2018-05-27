var deck = [];
var turn = 0;
var began = false;
var active = 0  ;
var suitA;
var suitB;
var tick;
var points = 0;
var time = 0;
var matchCount = 0;
var winModal = document.getElementById('winModal');
var winTime = document.querySelector('.modalTime');
//TODO : 
        //Animation

////////////////////////////////////
//STARTUP PROCESS <<<<<<<<<<<<<<<<//
////////////////////////////////////

//Adds all cards to var deck, removes them from rendered space.
function deckList(){
    for (let i = 0; i < 16; i++) {
        let cad = document.querySelector('.card');
        deck.push(cad); cad.remove();
    }
} deckList();

//Takes the deck, shuffles it with the shuffle function. Calls the draw function.
deck = shuffle(deck); draw();

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

//Takes the var deck and renders all cards.
function draw(){
    for (let i = 0; i < 16; i++){
        const deckHead = document.querySelector('.deck');
        deckHead.appendChild(deck[i]);
    }
}

//Checks if an initialization has occured yet, if not, executes function stack.
if (began === false) {
    setTimeout(function beginFlip(){
        for (let i = 0; i < 16; i++){
            let hitClick = deck[i];
            flip(hitClick);
        }
        time = 1;
    }, 5000);
}
//Begins the timer function after a short delay.
if (time => 1){
    setTimeout(timer, 5000); 
}

/////////////////////////////////
//UX Functions <<<<<<<<<<<<<<<<//
////////////////////////////////
//Simply soft refreshes the page.
const refresh = document.querySelector('.restart');
refresh.addEventListener('click', function(){
   location.reload(false);
});

//Takes the event 'click' then executes a function. Function makes sure the clicked target was a li element, then executes the flip function with event.target as the operator.
document.querySelector('.deck').addEventListener('click', function(trueCheck){
    let hitClick = event.target;
    let turnCounter = document.querySelector('.moves');
    console.log();
    
    if (suitB === undefined){
        if (trueCheck.target.nodeName === 'LI' && hitClick.classList[1] != "open"){
            flip(hitClick);
           cardCheck(hitClick);
            turn += 1;
            turnCounter.textContent = turn;
        }    
    } else {
        console.log('Too many moves!');
    }
});

//Restart button on modal success screen
document.querySelector('.exit').addEventListener('click', function(){
   winModal.style.display = "none";
   location.reload(true);
});

/////////////////////////////////////////
//BACKGROUND FUNCTIONS <<<<<<<<<<<<<<<<//
////////////////////////////////////////

//Basic Flip function for flipping clicked cards
function flip(hitTarget){
        hitTarget.classList.toggle('open'); hitTarget.classList.toggle('show');
        starCounter();
}

//Timer function for counting and updating the UI timer.
function timer(){
    let gameTime = document.querySelector('.time');
    let fixedTime = time.toFixed(0);
    if(time < 601){
        setTimeout(function clock(){
            time += 1;
            gameTime.textContent = fixedTime;
            timer();
        }, 1000);    
    } else if (timer => 601) {
        fail();
    }
}


//Function for bringing up the Modal popup for winning
function win(){
    if(matchCount === 8){
       console.log('blorp');
       let winPoints = document.querySelector('.modalPoints');
        winPoints.textContent = points;
        winTime.textContent = time;
        winModal.style.display = "block";
        finalStar();
    }
}

//Function for pinging a fail alert and reloading the game
function fail(){
    alert('GAME OVER');
    location.reload(true);
}

//Function for reseting card variable data and resetting the second card trigger variable
function cardReset(){
    suitA.parentElement.classList.remove('miss'); suitB.parentElement.classList.remove('miss');
    suitA = undefined;
    suitB = undefined;
    tick = false;
    active = 0;

}


//Checks if first or second card, Assigns relavent variable to said card, increases the active counter. Runs suit check function on second. Enables second card trigger variable.
function cardCheck (target){
        if (active === 0){
            suitA = target.firstElementChild;
            active = active + 1;
            tick = true;
        } else if (tick === true){
            suitB = target.firstElementChild;
            active = active + 1;
            suitChecker();
            
        }
}


//Checks the card variables for proper suit, if matched; adds the match class. If not, flips the cards back.
function suitChecker(){
    let pointCounter = document.querySelector('.points');
    if (suitA.classList[1] === suitB.classList[1]){
        
        suitA.parentElement.classList.add('match'); suitB.parentElement.classList.add('match');
        suitA.parentElement.classList.remove('show'); suitA.parentElement.classList.remove('open');
        suitB.parentElement.classList.remove('show'); suitB.parentElement.classList.remove('open');
        points += 10;
        pointCounter.textContent = points;
        matchCount += 1;
        win();
        cardReset();
    } else {
        suitA.parentElement.classList.add('miss'); suitB.parentElement.classList.add('miss');
        setTimeout(function reFlip(){
            suitA.parentElement.classList.toggle('open'); suitA.parentElement.classList.toggle('show');
            suitB.parentElement.classList.toggle('open'); suitB.parentElement.classList.toggle('show');
            points -= 2;
            pointCounter.textContent = points;
            cardReset();
        }, 1000);
    }
}


//Deletes stars after x turns.
function starCounter(){
        if (turn === 16) {
            const starCounter = document.querySelector('.stars');
            const star = starCounter.firstElementChild;
            starCounter.removeChild(star);
            starCount -= 1;
            
        } else if (turn === 25){
            const starCounter = document.querySelector('.stars');
            const star = starCounter.firstElementChild;
            starCounter.removeChild(star);
        
        } else if (turn > 29){
            const starCounter = document.querySelector('.stars');
            const star = starCounter.firstElementChild;
            starCounter.removeChild(star);
            fail();
            
        }
}

//Takes final star count and adds it to the win screen
function finalStar(){
    let winStar = document.querySelector('.stars');
    document.querySelector('#starBox').append(winStar);
}