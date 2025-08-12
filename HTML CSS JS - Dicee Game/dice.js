// var value1 = Math.floor(Math.random() * 6) + 1;
// var value2 = Math.floor(Math.random() * 6) + 1;
// console.log(value1);
// console.log(value2);
// if (value1 > value2) {
//     var winner = 1 ;
// } else if (value1 < value2) {
//     var winner = 2;
// } else {
//     console.log("Draw!");
// }

// if(winner == 1){
//     console.log("Player 1 wins.");
//     document.querySelector("h1").innerHTML = "🚩Player 1 wins";
// }else if(winner == 2){
//     console.log("Player 2 wins.")
//     document.querySelector("h1").innerHTML = "Player 2 wins🚩";
// }else{
//     document.querySelector("h1").innerHTML = "🏳️Draw!🏳️";
// }
// if(value1 == 1){
//     document.querySelector("img.img1").setAttribute("src", "images/dice1.png");
// }
// if (value1 == 2) {
//     document.querySelector("img.img1").setAttribute("src", "images/dice2.png");
// }
// if (value1 == 3) {
//     document.querySelector("img.img1").setAttribute("src", "images/dice3.png");
// }
// if (value1 == 4) {
//     document.querySelector("img.img1").setAttribute("src", "images/dice4.png");
// }
// if (value1 == 5) {
//     document.querySelector("img.img1").setAttribute("src", "images/dice5.png");
// }
// if (value1 == 6) {
//     document.querySelector("img.img1").setAttribute("src", "images/dice6.png");
// }

// if (value2 == 1) {
//   document.querySelector("img.img2").setAttribute("src", "images/dice1.png");
// }
// if (value2 == 2) {
//   document.querySelector("img.img2").setAttribute("src", "images/dice2.png");
// }
// if (value2 == 3) {
//   document.querySelector("img.img2").setAttribute("src", "images/dice3.png");
// }
// if (value2 == 4) {
//   document.querySelector("img.img2").setAttribute("src", "images/dice4.png");
// }
// if (value2 == 5) {
//   document.querySelector("img.img2").setAttribute("src", "images/dice5.png");
// }
// if (value2 == 6) {
//   document.querySelector("img.img2").setAttribute("src", "images/dice6.png");
// }

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "🏳️Draw! Play again!🏳️";
}
