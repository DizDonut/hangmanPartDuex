var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var guesses = [];
var wordBank = ["floor","walls", "facade", "fascia", "stucco","siding", "slate","drywall","windows","doors","carpet","countertop","closets","roof","hallway"];
var answerMask = [];

function randomWord(){
    var random = wordBank[Math.floor(Math.random() * wordBank.length)];
    document.getElementById("word").innerHTML = random;
    return random;
}
