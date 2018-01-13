'use strict';

//This is an about me guessing game program with 5 questions.

// Welcome the user and have them fill in some info.
alert('Welcome stranger!');
var userName = prompt('Who do I have the pleasure of speaking with? ');
console.log('The users name is ' + userName);
alert('Great to meet you ' + userName + '!');

// Make them play
function startGame() {
  var letsPlay = prompt('Do you want to play a game? Press Y or N').toUpperCase();
  console.log('The user chose ' + letsPlay);

  if(letsPlay === 'Y'){
    alert('Great! Let\'s have a little fun!');
  }else if(letsPlay === 'N'){
    alert('That\'s too bad. We are gonna play anyway!');
  }else{
    alert('That\'s not a valid response!');
    prompt('Do you want to play a game? Press Y or N').toUpperCase();
    if(letsPlay === 'Y'){
      alert('Great! Let\'s have a little fun!');
    }else{
      alert('That\'s too bad. We are gonna play anyway!');
    }
  }
}


// Go over rules and wish them luck
alert('The rules are simple. ');
alert('I am going to ask you a few questions. All you have to do is answer Y or N. ');
alert('Let\'s see if you can guess correctly. Good Luck! ');


//Q1 and log answer
function questionOnePets() {
  var ownPets = prompt('First question. Do you think I own any pets? ').toUpperCase();
  console.log('Do I own pets? ' + ownPets);

  if(ownPets === 'Y'){
    alert('Oh man! I don\'t own pets currently!');
  }else{
    alert('Lucky Guess!');
  }
}

//Q2 and log answer
function questionTwoFootball() {
  var likeFootball = prompt('Next question. Do I like football? ').toUpperCase();
  console.log('Do I like football? ' + likeFootball);

  if(likeFootball === 'Y'){
    alert('Only if the SEAHAWKS are playing! Just kidding. You\'re right!');
  }else{
    alert('Oh man! You missed that one. I love footall!');
  }
}

//Q3 and log answer
function questionThreeKids() {
  var haveKids = prompt('Next question. Do I have kids? ').toUpperCase();
  console.log('Do I have kids? ' + haveKids);

  if(haveKids === 'Y'){
    alert('Haha! Is my dad bod that obvious!');
    alert('Good guess. I have 2 kids.');
  }else{
    alert('Nice try but I have 2 kids. ');
  }
  alert('A couple more questions and we are done. ');
}


//Q4 and log answer
function questionFourLotto() {
  var winLotto = prompt('Next question. Have I ever won the lottery? ').toUpperCase();
  console.log('Did I win the lottery? ' + winLotto);

  if(winLotto === 'Y'){
    alert('Really??');
    alert('Do you think I would be sitting in this class if I did? ');
  }else{
    alert('Unfortunately.....You are right!');
  }
  alert('Okay. Last question.');
}


//Q5 and log answer
function questionFiveTravel() {
  var leaveCountry = prompt('Have I ever been out of the country? ').toUpperCase();
  console.log('Have I ever left the US? ' + leaveCountry);

  if( leaveCountry === 'Y'){
    alert('Good Answer! I have been a couple places. My favorite was Tahiti.');
  }else{
    alert('Not quite. I have been a couple of places. ');
  }
}

//Q6 loop
function questionSixAge() {
  alert('Surprise! I think you know me so well that I want to ask you a bonus question! Click okay when ready. ');
  var myAge = prompt('How old do I look? ');
  console.log(myAge);
  myAge = parseInt(myAge);
  var i = 0;

  do{
    if(myAge < 39){
      alert('Thanks for the compliment....but I am older than that.');
    }else if(myAge > 39){
      alert('Ouch! I look that old? I am younger than that.');
    }else if(myAge === 39){
      alert('Wow! Excellent guess! You know me better than I thought.');
      break;
    }else {
      alert('Please enter a number!! Smarty pants.');
    }
    i++;
    alert('You have ' + (4 - i) + ' chances left!');
    myAge = prompt('Guess again! How old do I look?');
    myAge = parseInt(myAge);
    console.log(myAge);
  }while(i <= 3);
  if(i === 3 && myAge !== 39){
    alert('So sorry but you are all out of tries. Game Over!');
  }
}

//Q7 array and loop
function questionSevenStates(){
  alert('Okay fine. I will ask you another question.');
  var statesLived = ['texas', 'massachusetts', 'nevada', 'georgia'];
  var userGuess = 5;
  var userCorrect = false;

  do{
    var stateGuess = prompt('Can you guess another state I have lived in? You only get ' + userGuess + ' tries.').toLowerCase();
    for( var i = 0; i < statesLived.length; i++){
      if(stateGuess === statesLived[i]){
        userCorrect = true;
      }
    }
    if(userCorrect === true){
      alert('Excellent guess!');
    }else{
      alert('Incorrect. Guess again.');
      userGuess--;
    }
  }while (userCorrect === false && userGuess > 0);
  if(userCorrect === false){
    alert('Good effort but you are out of chances. ');
  }
}

//Call Functions
startGame();
questionOnePets();
questionTwoFootball();
questionThreeKids();
questionFourLotto();
questionFiveTravel();
questionSixAge();
questionSevenStates();

alert('That\'s all the questions for now. Thanks for playing. ');


/*
alert('Ok let me calculate your answers.......');

// Run a quick check
if(ownPets === 'N' && likeFootball === 'Y' && haveKids === 'Y' && winLotto === 'N' && leaveCountry === 'Y' && myAge === 39){
    alert('Holy $*@t! Perfect Score. You know me very well!') 
}else{
    alert('You didn\'t get a perfect score but did very well!')
}

// wrap up 
alert('Well that\'s a wrap. Thanks for playing.');
*/

// end of program

