function getComputerChoice () {
    let get = Math.floor(Math.random() * 3)
    if (get == 1) {
        return "Rock";
    } else if (get == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
 }

getComputerChoice();
