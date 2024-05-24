function getHumanChoice() {
    let humanChoice = prompt("Rock, paper or scissors?")
    return humanChoice
}

function getComputerChoice() {
    number = Math.floor(Math.random() * 100)
    let computerChoice = ""

    if (1 < number && number <= 33) {
        computerChoice = "rock"
    }

    else if ( 33 < number && number <= 66) {
        computerChoice = "paper"
    }

    else if (66 < number && number <= 99) {
        computerChoice = "scissors"
    }

    else {
        getComputerChoice()
    }

    console.log(computerChoice)
    return computerChoice
}


let humanScore = 0
let computerScore = 0 

function playRound(humanChoice, computerChoice) {
    
    if (humanChoice.toLowerCase() == computerChoice) {
        console.log("This round is a tie, go again!")
    }
    
    else if (humanChoice.toLowerCase() == "rock" && computerChoice != "paper") {
        humanScore++ 
        count++
    }
    
    else if (humanChoice.toLowerCase() == "paper" && computerChoice != "scissors") {
        humanScore++ 
        count++
    }
    
    else if (humanChoice.toLowerCase() == "scissors" && computerChoice != "rock") {
        humanScore++
        count++
    }
    
    else {
        computerScore++
        count++
    }
    console.log(humanScore, computerScore)
    updateScore()
}

let count = 0 

function playGame (humanChoice, computerChoice) {

    while (count <= 5 && humanScore < 3 && computerScore < 3) {
        playRound(humanChoice, computerChoice)
        break
    }

    if (humanScore == 3 || (count == 5 && humanScore > computerScore)) {
        console.log("You win!")
        result.textContent = "You win!"
    }

    else if (computerScore == 3 || (count == 5 && computerScore > humanScore)) {
        console.log("You lose!")
        result.textContent = "You lose!"
    }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", (e) => {
    const humanChoice = "rock" 
    const computerChoice = getComputerChoice(); 
    playGame(humanChoice, computerChoice);
});


paper.addEventListener("click", (e) => {
    const humanChoice = "paper"
    const computerChoice = getComputerChoice(); 
    playGame(humanChoice, computerChoice);
});

scissors.addEventListener("click", (e) => {
    const humanChoice = "scissors"
    const computerChoice = getComputerChoice(); 
    playGame(humanChoice, computerChoice);
});

const score = document.querySelector("#score")
result = document.createElement("p")

function updateScore() {
    result.textContent = `You: ${humanScore}, Computer: ${computerScore}`
}
updateScore();
score.appendChild(result)
