var quoteArray = [
  ["De quoi ne devrions nous pas rire car c'est trop sérieux ?"],
  ["Prends 5 minutes et résume ta vie ou une partie de celle-ci selon les étapes : situation initiale, événement perturbateur, péripéties, situation finale"],
  ["Quelle type de mort te fait le plus peur ?"],
  ["Souhaiterais-tu être connu ? Si oui, de quelle manière ?"],
  ["Fais-tu la sieste ?"],
  ["Fais-tu ton lit le matin ?"],
  ["Tu es dans quelle équipe : tu snoozes ou tu te lèves direct ?"],
  ["Quel est l'élément sur lequel tu ments dans ton CV ?"],
  ["Tu es à jour de tes vaccins ?"],
  ["Tu utilises quelle type de cafetière ?"],
  ["Expresso ou café filtre ?"],
  ["Parfois, on souhaite tout changer dans sa vie mais quel élément souhaiterais-tu toujours garder ?"],
  ["Es-tu plus influencé par le passé ou le futur ?"],
  ["Tu prends ta douche le soir ou le matin ?"],
  ["As-tu appris à jouer d'un instrument de musique ?"],
  ["Te souviens-tu de la dernière fois où tu as croisé un animal dans la nature ?"],
  ["Que souvenir joyeux d'enfance souhaites-tu partager ?"],
  ["Quelle est ta tenue préférée pour dormir ?"],
  ["On t'apprend que tu as été cloné à ta naissance et ton clone a fait sa vie de son côté. Comment réagis-tu ?"],
  ["Imagine que le sexe n'existe pas. Une startup arrive avec le concept. Imagine le pitch de présentation."],
  ["Ton appartement part en fumée, quels éléments ne peuvent être remplacé ?"],
  ["Quelle est la dernière chanson que tu as entendu ?"],
  ["Tu crois aux fantomes ? Et les extraterrestres tu en penses quoi ?"],
  ["C'est qui le plus fort, l'hippopotame ou l'éléphant ?"],
  ["Saut à l'élastique ou saut en parachute ?"],
  ["Si tu pouvais changer l'année de ta naissance, que choisirais-tu ?"],
  ["Chat ou chien ?"],
  ["As-tu eu un animal de compagnie ? Comment s'appelait-il ?"],
  ["Quel siège préfères-tu : fenêtre ou couloir ?"],
  ["Si tu pouvais revivre une année de ta vie, quel serait ton choix ?"],
  ["Tu es plutôt du matin ou du soir ?"],
  ["As-tu déjà voyagé seul ? Où es-tu allé ? C'était comment ?"],
  ["Selon toi, quel a été le moment le plus décisif de ta vie ?"],
  ["Tu préfères savoir que tu as 5 ans à vivre ou avoir 10 ans mais ne pas le savoir ?"],
  ["Quels sont tes surnoms ?"],
  ["Comment organises-tu les icones de ton téléphone ? Et celles de ton ordinateur ?"],
  ["Que se serait-il passé si pour les choses auxquelles tu as dit non, tu avais dit oui ?"],
  ["Quelle est la chose la plus naïve à laquelle tu croyais lorsque tu étais enfant ?"],
  ["Qu'est ce que tes vêtements disent de toi ?"],
  ["Te souviens-tu de ton tout premier contact avec Internet ?"],
  ["Tu as une carte de bibliothèque ?"],
  ["Tu accepterais de partager ta chambre avec un inconnu ?"],
  ["Le combat contre le réchauffement climatique implique-t-il nécessairement de la frustration ?"],
  ["Tu préfères arrêter de manger du fromage ou arrêter de baiser ?"],
  ["Qui devrait jouer ton rôle dans le biopic de ta vie ?"],
  ["Tu préfères revoir une ancienne bonne série ou essayer une nouvelle qui pourrait-être moyenne ?"],
  ["Saint-Nectaire ou cantal ?"],
  ["Raclette ou fondue ?"],
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

  $("body").css("background-color", randomColor);
  $("#quote-text").css("color", randomColor);
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

    $("body").css("background-color", randomColor);
    $("#quote-text").css("color", randomColor);
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
