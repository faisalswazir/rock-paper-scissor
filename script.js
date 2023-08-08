
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
        updateString = "You and the Bot draw the same weapon!";
        return 0;

    } else if(playerSelection === "rock" && computerSelection === "scissor"){
        updateString = "Rock beats scissor"
        return 1;

    } else if(playerSelection === "paper" && computerSelection === "rock"){
        updateString = "Paper beats rock"
        return 1;

    } else if(playerSelection === "scissor" && computerSelection === "paper"){
        updateString = "Scissor beats paper"
        return 1;
    }
    // new 
    else if(computerSelection === "rock" && playerSelection === "scissor"){
        updateString = "Rock beats scissor"
        return 2;

    } else if(computerSelection === "paper" && playerSelection === "rock"){
        updateString = "Paper beats rock"
        return 2;

    } else if(computerSelection === "scissor" && playerSelection === "paper"){
        updateString = "Scissor beats paper"
        return 2;
    }
}

let updateString;
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
            
            divUpdate.textContent = updateString;

            if(result == 0){
                divResult.textContent = "Its a tie!";
                divScore.textContent = `scores : player-${player}  Bot-${computer}`;
                
            } else if(result == 1){
                divResult.textContent = "You Won";                 
                ++player;
                divScore.textContent = `scores : player-${player}  Bot-${computer}`;
                if(player === 5){
                    console.log('You Won, Yay! :D');
                    divResult.setAttribute('style',"font-size:64px");
                    divResult.textContent = "You Won, Yay! :D"     
                }
            } else if(result == 2){
                divResult.textContent = "You Lost";                
                ++computer;
                divScore.textContent = `scores : player-${player}`+"\t"+`Bot-${computer}`;
                if(computer === 5){
                    console.log('You Lost, Sorry :('); 
                    divResult.setAttribute('style',"font-size:64px");
                    divResult.textContent = "You Lost, Sorry :("          
                }
            }

            
            
        });
    });
}


game();