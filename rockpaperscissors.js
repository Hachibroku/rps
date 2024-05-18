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
    return humanScore, computerScore
}

let count = 0 
function playGame () {
    // somehow make this call playRound 5 times
    // and tally the scores to see who wins at the end
    while (count < 5 && humanScore < 3 && computerScore < 3) {
        const humanChoice = getHumanChoice()
        const computerChoice = getComputerChoice() 
        playRound(humanChoice, computerChoice)
    }

    if (humanScore > computerScore) {
        console.log("You win!")
    }

    else {
        console.log("You lose!")
    }
}

playGame()

