var quoteArray = [
  ["De quoi ne devrions nous pas rire car c'est trop sérieux ?"],
  ["Prends 5 minutes et résume ta vie ou une partie de celle-ci selon les étapes : situation initiale, événement perturbateur, péripéties, situation finale"],
  ["Quelle type de mort te fait le plus peur ?"],
  ["Souhaiterais-tu être connu ? Si oui, de quelle manière ?"],
  ["Fais-tu la sieste ?"]
  ["Fais-tu ton lit le matin ?"]
  ["Tu es dans quelle équipe : Snooze ou debout immédiatement ?"]
  ["Quel est l'élément sur lequel tu ments dans ton CV ?"]
  ["Tu es à jour de tes vaccins ?"]
  ["Tu utilises quelle type de cafetière ?"]
  ["Expresso ou café filtre ?"]
  ["Parfois, on souhaite tout changer dans sa vie mais quel élément souhaiterais-tu toujours garder ?"]
  ["Es-tu plus influencé par le passé ou le futur ?"]
  ["Tu prends ta douche le soir ou le matin ?"]
  ["As-tu appris à jouer d'un instrument de musique ?"]
  ["Te souviens-tu de la dernière fois où tu as croisé un animal dans la nature ?"]
  ["Que souvenir joyeux d'enfance souhaites-tu partager ?"]
  ["Quelle est ta tenue préférée pour dormir ?"]
  ["On t'apprend que tu as été cloné à ta naissance et ton clone a fait sa vie de son côté. Comment réagis-tu ?"]
  ["Imagine que le sexe n'existe pas. Une startup arrive avec le concept. Imagine le pitch de présentation."]
];

var colorArray = [
  "#FF99FF", // pinkish-purple
  "#9999FF", // blue
  "#00CC00", // green
  "#FF6633", // orange
  "#FFCC00", // yellow
  "#999999", // gray
];

var numQuotes = quoteArray.length;
var numColors = colorArray.length;

var randomNum;

var randomColor;
var newRandomColor;

var randomColorNumber = 0;

// arrays each containing
// text at index 0
// and author at index 1
var quote;
var newQuote;

var twitterQuote = "";

$(document).ready(function() {
  // initialize quote to a random one
  randomNum = newRandomNumber();
  randomColor = newRandomColor();

  quote = newQuote(randomNum);
  twitterQuote = quote[0] + " " + quote[1];

  $("#quote-text").text(
    quote[0]);
  $("#quote-author").text(
    quote[1]);

  $("body").css("background-color", randomColor);
  $("#quote-text").css("color", randomColor);
  $("#quote-author").css("color", randomColor);
  $("#quote-box button").css("background-color", randomColor);
  $("i").css("color", randomColor);

  // whenever #new-quote-icon is clicked
  $("#new-quote-icon").on("click", function() {

    randomNum = newRandomNumber();
    randomColor = newRandomColor();

    quote = newQuote(randomNum);
    twitterQuote = quote[0] + " " + quote[1];

    $("#quote-text").text(
      quote[0]);
    $("#quote-author").text(
      quote[1]);

    $("body").css("background-color", randomColor);
    $("#quote-text").css("color", randomColor);
    $("#quote-author").css("color", randomColor);
    $("#quote-box button").css("background-color", randomColor);
    $("i").css("color", randomColor);

  }); // end of new quote function

  // when twitter icon is clicked
  $("#twitter-icon").on("click", function() {
    window.open("https://twitter.com/intent/tweet?text=" + twitterQuote);
  }); // end of twitter click function

}); // end of document ready function

// returns quote with index randomNum
function newQuote(randomNum) {
  return quoteArray[randomNum];
}

// returns number corresponding to
// quoteArray indices
function newRandomNumber() {
  var num = Math.floor(Math.random() * (numQuotes - 1));
  if (num >= randomNum) {
    num++;
  }
  return num;
}

// returns a new random color
// that is different than
// the current one
function newRandomColor() {
  var num = Math.floor(Math.random() * (numColors - 1));

  if (num >= randomColorNumber) {
    num++;
  }

  randomColorNumber = num;
  return colorArray[num];
}
