function getHumanChoice() {
    let humanChoice = prompt("Rock, paper or scissors?")
    return humanChoice
}

function getComputerChoice() {
    number = Math.floor(Math.random() * 100)
    console.log(number)
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



function playRound(humanChoice, computerChoice) {
    // logic will go here
    if (humanChoice.toLowerCase() == computerChoice) {
        console.log("This round is a tie!")
    }
    
    else if (humanChoice.toLowerCase() == "rock" && computerChoice != "paper") {
        humanScore++ 
    }
    
    else if (humanChoice.toLowerCase() == "paper" && computerChoice != "scissors") {
        humanScore++ 
    }
    
    else if (humanChoice.toLowerCase() == "scissors" && computerChoice != "rock") {
        humanScore++
    }
    
    else {
        computerScore++
    }
}

const humanChoice = getHumanChoice()
const computerChoice = getComputerChoice() 

function playGame () {
    let humanScore = 0
    let computerScore = 0 
    playRound(humanChoice, computerChoice)

    console.log(humanScore, computerScore)

}

playGame()