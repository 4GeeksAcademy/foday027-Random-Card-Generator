/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const suit = ["♥", "♠", "♣", "♦"];
  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  function randomCard() {
    let randomSuit = suit[Math.floor(Math.random() * suit.length)];
    let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

    document.querySelector(".card-symbol1").innerHTML = randomSuit; // Use innerHTML to set HTML content
    document.querySelector(".number").innerHTML = randomNumber;
    document.querySelector(".card-symbol2").innerHTML = randomSuit;

    if (randomSuit === "♥" || randomSuit === "♦") {
      document.querySelector(".card-symbol1").style.color = "red";
      document.querySelector(".card-symbol2").style.color = "red";
    } else if (randomSuit === "♠" || randomSuit === "♣") {
      document.querySelector(".card-symbol1").style.color = "black";
      document.querySelector(".card-symbol2").style.color = "black";
    }
  }
  randomCard();
};
