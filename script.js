'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let  currentScore = 20;
let highscore = 0;

//creating a function to refactor the code making it easily to understand 
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener
('click', function (){
    const guess = Number(document.querySelector('.guess').value)
    //when there is no input 
    if(!guess){
        // document.querySelector('.message').textContent = 'No number'
        displayMessage('No number')
    }else if(guess === secretNumber){
        displayMessage('Correct Number!')
        document.querySelector('.number').textContent = secretNumber; 
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'
        if(currentScore > highscore){
            highscore = currentScore;
            document.querySelector('.highscore').textContent = highscore; 
        }
    //when guess is wrong
    }else if(guess !== secretNumber){
        if(currentScore > 1){
        displayMessage(guess > secretNumber ? 'too  high!': 'to low!')
        currentScore--;
        document.querySelector('.score').textContent = currentScore;
        }else{

            displayMessage('you lost the game !')
            document.querySelector('.score').textContent = 0;
        } 
    }
});


document.querySelector('.again').addEventListener('click',function(){
    currentScore= 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...')
    document.querySelector('.score').textContent = currentScore;
    document.querySelector('.guess').value = ""
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.number').textContent = '?'; 

});

