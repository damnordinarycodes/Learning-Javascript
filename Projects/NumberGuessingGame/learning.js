// const minNum = 1;
// const maxNum = 100;
// const answer = Math.floor(Math.random()* (maxNum - minNum + 1)) + minNum;

// let attempts = 0;
// let guess;
// let running = true;

// while(running == true){

//     guess = window.prompt(`Guess a Number Between ${minNum} - ${maxNum}`)
//     guess = Number(guess);
    
//     if(isNaN(guess)){
//         window.alert("please enter a valid number");
//     }
//     else if(guess < minNum || guess > maxNum){
//         window.alert("Please enter a valid number");
//     }
//     else{
//         attempts++;
//         if(guess < answer){
//             window.alert("TOOOO LOW, Try Again")
//         }
//         else if(guess > answer){
//             window.alert("Toooo HIGH, Try Again")
//         }
//     else{
//         window.alert(`CORRECT !! The answer is ${answer}. It Took You ${attempts} to find it`)
//             running = false;

//         }
//     }
// }

// DOM-based Number Guessing Game
const minNum = 1;
const maxNum = 100;

let answer = null;
let attempts = 0;

const startBtn = document.getElementById('startBtn');
const input = document.getElementById('guessInput');
const submitBtn = document.getElementById('submitGuess');
const feedback = document.getElementById('feedback');
const attemptsEl = document.getElementById('attempts');
const restartBtn = document.getElementById('restartBtn');
const rangeMinEl = document.getElementById('range');
const rangeMaxEl = document.getElementById('range-max');

function initUI(){
    // initial UI state
    input.style.display = 'none';
    submitBtn.style.display = 'none';
    restartBtn.style.display = 'none';
    feedback.textContent = '';
    attemptsEl.textContent = 'Attempts: 0';
    rangeMinEl.textContent = minNum;
    rangeMaxEl.textContent = maxNum;
}

function newGame(){
    answer = Math.floor(Math.random() * (maxNum - minNum + 5)) + minNum;
    attempts = 0;
    feedback.textContent = '';
    attemptsEl.textContent = 'Attempts: 0';
    input.value = '';
    input.disabled = false;
    submitBtn.disabled = false;

    // reveal controls
    input.style.display = 'inline-block';
    submitBtn.style.display = 'inline-block';
    restartBtn.style.display = 'none';
    startBtn.style.display = 'none';
    input.focus();
}

function endGame(winMessage){
    feedback.textContent = winMessage;
    input.disabled = true;
    submitBtn.disabled = true;
    restartBtn.style.display = 'inline-block';
}

function handleGuess(){
    const val = Number(input.value);
    if (!input.value || isNaN(val)){
        feedback.textContent = 'Please enter a valid number.';
        return;
    }
    if (val < minNum || val > maxNum){
        feedback.textContent = `Please enter a number between ${minNum} and ${maxNum}.`;
        return;
    }
    attempts++;
    attemptsEl.textContent = `Attempts: ${attempts}`;

    if (val < answer){
        feedback.textContent = 'Too low — try again.';
    } else if (val > answer){
        feedback.textContent = 'Too high — try again.';
    } else {
        endGame(`Correct! The answer was ${answer}. It took you ${attempts} attempts.`);
    }
}

// Event wiring
document.addEventListener('DOMContentLoaded', () => {
    initUI();
    startBtn.addEventListener('click', newGame);
    submitBtn.addEventListener('click', handleGuess);
    restartBtn.addEventListener('click', () => {
        // show start button again for a fresh flow
        startBtn.style.display = 'inline-block';
        input.style.display = 'none';
        submitBtn.style.display = 'none';
        restartBtn.style.display = 'none';
        feedback.textContent = '';
        attemptsEl.textContent = 'Attempts: 0';
    });
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleGuess();
    });
});
