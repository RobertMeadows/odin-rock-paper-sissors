function computerPlay(){
    let num;
    let computerSelection;
    
    num = Math.floor(Math.random() * 3 + 1);
    switch (num){
        case 1:
            computerSelection = "rock";
            break;
        case 2:
            computerSelection = "paper";
            break;
        case 3:
            computerSelection = "sissors";
            break;
    }

    return computerSelection;
}

function playerSelection(){
    let selection;
    selection = "rock";
    return selection;
}

