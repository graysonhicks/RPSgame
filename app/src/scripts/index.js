// Libraries

// Styles
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/index.scss"
import { equal } from 'assert';

//declaring vairiables
var humanInput = '0';
var computerInput = '0';
var humanScore = 0;
var computerScore = 0;

//dclaring vairiable to access the HtML elements
var HumanScore = document.getElementById("hScore");
const ComputerScore = document.getElementById("cScore");

var humanImage = document.getElementById("hResultImage");
var computerImage = document.getElementById("cResultImage");

var gameresult = document.getElementById("result");

const rockImage = document.getElementById("rock");
const paperImage = document.getElementById("paper");
const scissorImage = document.getElementById("scissor");

//This funtion checks the result

rockImage.onclick = function (e) {
    humanInput = '0';
    humanImage.src = 'src/images/rock.jpg';
    //make a random generator for the computer for its input
    computerInput = Math.floor(Math.random() * 3);
    switch (computerInput) {
        case 0:
            computerImage.src = 'src/images/rock.jpg';
            break;
        case 1:
            computerImage.src = 'src/images/paper.jpg';
            break;
        case 2:
            computerImage.src = 'src/images/scissor.jpg';
            break;
    }
    var result = humanInput + computerInput;
    //checks the result and outputs if you won, lost, or the game is a tie, also add points to the scoreboard
    switch (result) {
        case '02':
            gameresult.innerHTML = 'you won';
            humanScore += 1;
            HumanScore.innerHTML = humanScore.toString();
            break;
        case '01':
            gameresult.innerHTML = 'you lost';
            computerScore += 1;
            ComputerScore.innerHTML = computerScore.toString();
            break;
        case '00':
            gameresult.innerHTML = 'It is a tie';
    }
}
paperImage.onclick = function (e) {
    humanInput = '1';
    humanImage.src = 'src/images/paper.jpg';
    //make a random generator for the computer for its input
    computerInput = Math.floor(Math.random() * 3);
    switch (computerInput) {
        case 0:
            computerImage.src = 'src/images/rock.jpg';
            break;
        case 1:
            computerImage.src = 'src/images/paper.jpg';
            break;
        case 2:
            computerImage.src = 'src/images/scissor.jpg';
            break;
    }
    var result = humanInput + computerInput;
    //checks the result and outputs if you won, lost, or the game is a tie
    switch (result) {
        case '10':
            gameresult.innerHTML = 'you won';
            humanScore += 1;
            HumanScore.innerHTML = humanScore.toString();
            break;
        case '12':
            gameresult.innerHTML = 'you lost';
            computerScore += 1;
            ComputerScore.innerHTML = computerScore.toString();
            break;
        case '11':
            gameresult.innerHTML = 'It is a tie';
    }
}
scissorImage.onclick = function (e) {
    humanInput = '2';
    humanImage.src = 'src/images/scissor.jpg';
    //make a random generator for the computer for its input
    computerInput = Math.floor(Math.random() * 3);
    switch (computerInput) {
        case 0:
            computerImage.src = 'src/images/rock.jpg';
            break;
        case 1:
            computerImage.src = 'src/images/paper.jpg';
            break;
        case 2:
            computerImage.src = 'src/images/scissor.jpg';
            break;
    }
    var result = humanInput + computerInput;
    //checks the result and outputs if you won, lost, or the game is a tie
    switch (result) {
        case '21':
            gameresult.innerHTML = 'you won';
            humanScore += 1;
            HumanScore.innerHTML = humanScore.toString();
            break;
        case '20':
            gameresult.innerHTML = 'you lost';
            computerScore += 1;
            ComputerScore.innerHTML = computerScore.toString();
            break;
        case '22':
            gameresult.innerHTML = 'It is a tie';
    }
}




//make a random generator for the computer for its input

