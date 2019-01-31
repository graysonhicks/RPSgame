// Libraries

// Styles
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/index.scss"

//declaring vairiables
var humanInput = '0';
var computerInput = '0';

//checks the human input 
var rockImage = document.getElementById("rock");
var paperImage = document.getElementById("paper");
var scissorImage = document.getElementById("scissor");

rockImage.onclick = function (e) {
    console.log("rock");
    humanInput = '0';
    console.log(humanInput);
}
paperImage.onclick = function (e) {
    console.log("paper");
    humanInput = '1';
    console.log(humanInput);
}
scissorImage.onclick = function (e) {
    console.log("scissor");
    humanInput = '2';
    console.log(humanInput);
}
var result = humanInput + computerInput;

//make a random generator for the computer for its input
computerInput = Math.floor(Math.random() * 3);
console.log(computerInput);