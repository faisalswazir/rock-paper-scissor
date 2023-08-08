
function getComputerChoice(){
    let r =  Math.floor(Math.random()*3);
    switch(r){
        case 0 : return "rock";
        case 1 : return "paper"; 
        case 2 : return "scissor"; 
    }
}


function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        // 0 means tie
        return 0;

    } else if(playerSelection === "rock" && computerSelection === "scissor"){

        return 1;

    } else if(playerSelection === "paper" && computerSelection === "rock"){

        return 1;

    } else if(playerSelection === "scissor" && computerSelection === "paper"){
        
        return 1;
    } else{
        return 2;
    }
}
let computerChoice;
let playerChoice;
let result;
let rounds  = computer = player = 0;
const resultToString = function(r){
    switch(r){
        case 0 : return "TIE";
        case 1 : return "WIN"; 
        case 2 : return "LOSS"; 
    }
}

function game(){
    const buttons = document.querySelectorAll('button');
    const divScore = document.querySelector('div.score');
    const divResult = document.querySelector('div.result');
    const divUpdate = document.querySelector('div.update');

    buttons.forEach((button) => {
        button.addEventListener('click', ()=>{

            if(player===5 || computer === 5){
                return;
            }

            playerChoice = button.className;
            computerChoice = getComputerChoice()
            
            result = playRound(playerChoice,computerChoice);
            
            divUpdate.textContent = resultToString(result)+ ` --------------- you chose ${playerChoice} and computer chose ${computerChoice}`;

            if(result == 0){
                
            } else if(result == 1){
                
                ++player;
                if(player === 5){
                    divResult.textContent = "YOU WON";         
                    divUpdate.textContent = "";           
                }
            } else if(result == 2){
                
                ++computer;
                if(computer === 5){
                    divResult.textContent = "YOU LOST";
                    divUpdate.textContent = "";                
                }
            }

            divScore.textContent = `scores : player-${player}  computer-${computer}`;
            
        });
    });
}


game();