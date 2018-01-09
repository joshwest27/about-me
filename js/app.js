'use strict';

//This is an about me guessing game program with 5 questions.

// Welcome the user and have them fill in some info.
alert('Welcome stranger!');
var userName = prompt('Who do I have the pleasure of speaking with? ');
console.log('The users name is ' + userName);
alert('Great to meet you ' + userName + '!');

var play = prompt('Do you want to play a game? Press Y or N')
.toUpperCase();
console.log('The user chose ' + play);

if(play === 'Y'){
    alert('Great! Let\'s have a little fun!')
}else{
    alert('That\'s too bad. Maybe next time!')
}



//var pets = parseInt(prompt('How many pets do you think I have?'));

// Ask the user 5 questions and log the answers into the console. 


/*
if(pets === 2){
    alert('That is correct!')
}else {
    alert('No, that is incorrect.')
}

//Question about age

var alliesAge = prompt('Do you think I\'m older than 30? Pleae respond with Y or N?')
.toUpperCase();

// possible answers: yes, no, YES, NO, Yes, No, y, n, Y, NO

if(alliesAge === 'Y'){
    alert('Yes I\'m older than 30. ')
}else if(alliesAge === 'N'){
    alert('Thank you, I am flattered.');    
}else{
    alert('Please enter Y or N!');
}


// ARRAYS - collection, store more than one value in a variable as an array, data structure

var arrayOfDogs = ['Gary', 'Charlotte', 'Demi', 'Bird', 'Mr Darcy'];
*/