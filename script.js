'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let  currentScore = 20;
let highscore = 0;



// document.querySelector('.highscore').textContent= highscore;


document.querySelector('.check').addEventListener
('click', function (){
    const guess = Number(document.querySelector('.guess').value)
    console.log (guess)
    
    //when there is no input 
    if(!guess){
        document.querySelector('.message').textContent = 'No number'
    }else if(guess === secretNumber){
        document.querySelector('.message').textContent =
        'Correct Number!';
        document.querySelector('.number').textContent = secretNumber; 
        
        
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'
        if(currentScore > highscore){
            highscore = currentScore;
            document.querySelector('.highscore').textContent = highscore; 
        }
        
    //when guess is to high
        
    }else if(guess > secretNumber){
        if(currentScore > 1 ){
        document.querySelector('.message').textContent = 
        'too  high!';
        currentScore--;
        document.querySelector('.score').textContent = currentScore;
        }else{
            document.querySelector('.message').textContent = 
            'you lost the game !';
            document.querySelector('.score').textContent = 0;
        }
    //when guess is to low 
        
    }else if(guess < secretNumber){
        if(currentScore > 1 ){
        
        document.querySelector('.message').textContent =
        'Too low'
        currentScore--;
        document.querySelector('.score').textContent = currentScore;
        } else{
            document.querySelector('.message').textContent = 
            'you lost the game !';
            document.querySelector('.score').textContent = 0;
            
        }
    }
});








document.querySelector('.again').addEventListener('click',function(){
    
    currentScore = 20;
    
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    
    document.querySelector('.message').textContent = 
    'Start guessing...';
    
    document.querySelector('.guess').value = ""
    
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'
    
    document.querySelector('.number').textContent = '?'; 
    
    
});

