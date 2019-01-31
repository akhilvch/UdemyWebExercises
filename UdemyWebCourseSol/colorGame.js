var randomSquare = Math.floor(Math.random() * 6) + 1;  // returns a random integer from 1 to 10
var squares = document.querySelectorAll(".square");
squares[randomSquare].style.color = rgb(Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255));

