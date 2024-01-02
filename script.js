// Players
let playerText = document.querySelector('#you');
let computerText = document.querySelector('#computer');

// Score
let scoreCount = document.querySelector('#scoreCount');

// Results
let results = document.querySelector('#results');

results.innerHTML = "Start";

//buttons
function userChoice(choice) {
        //computer choice
        let choices = ['rock', 'paper', 'scissor'];
        let computerChoice = choices[Math.floor(Math.random() * 3)];

        //user choice 
        you.innerHTML = choice;
        computerText.innerHTML = computerChoice;

        if (choice === computerChoice) {
            results.innerHTML = "It's a Tie";
        } else if (
            (choice === 'rock' && computerChoice === 'scissor') ||
            (choice === 'paper' && computerChoice === 'rock') ||
            (choice === 'scissor' && computerChoice === 'paper')
        ) {
            results.innerHTML = "You Win!";
            scoreCount.innerHTML = parseInt(scoreCount.innerHTML) + 1;
        } else {
            if (parseInt(scoreCount.innerHTML) > 0) {
                scoreCount.innerHTML = parseInt(scoreCount.innerHTML) - 1;
                results.innerHTML = "You Lose!";
            } else {
                results.innerHTML = "Game Over";
                playerText.innerHTML = "-------";
                computerText.innerHTML = "-------";
                scoreCount.innerHTML = 0;
            }
        }
    }

    //reset button
    function clearBtn() {
        playerText.innerHTML = "-------";
        computerText.innerHTML = "-------";
        results.innerHTML = "Start the game";
        scoreCount.innerHTML = 0;
    }
