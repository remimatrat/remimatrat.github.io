var quoteArray = [
  ["What is the thing that can't be replaced if your appartment would burn?"],
  ["Do you think that we are the most advanced civilisation that Earth ever carried?"],
  ["When is your birthday?\n Do you belive in zodiac signs?\n Which are the most accurate chinese or classics?"],
  ["Do you keep track of a wish list or a list of things you'd like to have?"],
  ["You can pick one superpower, which one would you?\n "With big powers come big responsabilities", what do you do with this super power?"],
  ["La sieste c'est ton truc ou pas du tout\u00A0?"],
  ["Fais-tu ton lit tous les matins\u00A0?"],
  ["Tu es dans quelle équipe : tu snoozes ou tu te lèves direct\u00A0?"],
  ["Quel est l'élément sur lequel tu ments dans ton CV\u00A0?"],
  ["Tu es à jour de tes vaccins\u00A0?"],
  ["Tu utilises quel type de cafetière\u00A0?"],
  ["Thé ou café\u00A0?"],
  ["Expresso ou allongé\u00A0?"],
  ["Parfois, on souhaite tout changer dans sa vie mais quels éléments garderais-tu quoi qu'il arrive\u00A0?"],
  ["Es-tu plus influencé par le passé ou le futur\u00A0?"],
  ["Tu prends ta douche le soir ou le matin\u00A0?"],
  ["Sais-tu jouer d'un instrument de musique\u00A0? Lequel\u00A0? A quel age as-tu appris\u00A0?"],
  ["Te souviens-tu de la dernière fois où tu as croisé un animal sauvage en pleine nature\u00A0?"],
  ["Quelle est ta tenue préférée pour dormir\u00A0?"],
  ["Imagine que le sexe n'existe pas. Une startup arrive avec le concept. Imagine le pitch de présentation."],
  ["Ton appartement part en fumée, quels éléments ne peuvent être remplacés\u00A0?"],
  ["Quelle est la chanson que tu as dans la tête\u00A0?"],
  ["Tu crois aux fantomes ? Et les extraterrestres tu en penses quoi\u00A0?"]
  ["Quel est ton signe du Zodiaque ? Tu y attaches de l'importance quand tu rencontres quelqu'un\u00A0?"],
  ["Si tu pouvais changer l'année de ta naissance, quelle date choisirais-tu\u00A0?"],
  ["Tu es plus chat ou chien\u00A0?"],
  ["As-tu eu un animal de compagnie\u00A0? Quel était son nom\u00A0?"],
  ["Quel siège préfères-tu : fenêtre ou couloir\u00A0?"],
  ["Si tu pouvais revivre une année de ta vie, tu choisirais quelle année\u00A0?"],
  ["Tu es plutôt du matin ou du soir\u00A0?"],
  ["As-tu déjà voyagé seul ? Où es-tu allé ? Comment l'as tu vécu\u00A0?"],
  ["Selon toi, quel a été le moment décisif de ta vie\u00A0?"],
  ["Tu préfères savoir que tu as 5 ans à vivre ou avoir 10 ans mais ne pas le savoir\u00A0?"],
  ["Quels sont/ont été tes surnoms\u00A0?"],
  ["Comment organises-tu les icones de ton téléphone ? Et celles de ton ordinateur\u00A0?"],
  ["Que se serait-il passé si aux choses auxquelles tu as dit non, tu avais dit oui\u00A0?"],
  ["Quelle est la chose la plus naïve à laquelle tu croyais lorsque tu étais enfant\u00A0?"],
  ["Qu'est ce que tes vêtements disent de toi\u00A0?"],
  ["Te souviens-tu de ton tout premier contact avec Internet\u00A0?"],
  ["Ton premier baiser était comment\u00A0?"],
  ["Tu as une carte de bibliothèque\u00A0?"],
  ["Tu accepterais de partager ta chambre avec un.e inconnu.e (hors contexte sexuel)\u00A0?"],
  ["Le combat contre le réchauffement climatique implique-t-il nécessairement de la frustration\u00A0?"],
  ["Tu préfères arrêter de manger du fromage ou arrêter de faire du sexe\u00A0?"],
  ["Qui devrait jouer ton rôle dans le biopic de ta vie\u00A0?"],
  ["Tu préfères revoir une ancienne bonne série ou essayer une nouvelle qui pourrait-être nulle\u00A0?"],
  ["Saint-Nectaire ou cantal\u00A0?"],
  ["Raclette ou fondue\u00A0?"],
  ["Y-a-t-il quelque chose que tu rêves de faire mais que tu n'as jamais fait\u00A0? Poruquoi\u00A0?"],
];

var colorArray = [
  "#D2B4DE", //
  "#F5B7B1", //
  "#D7BDE2", //
  "#E6B0AA", //
  "#F2D7D5", //
  "#D4E6F1", //
  "#A9CCE3", //
  "#D1F2EB", //
  "#D0ECE7", //
  "#D4EFDF", //
  "#D5F5E3", //
  "#FDEBD0", //
  "#F9E79F", //
  "#FAD7A0", //
  "#F5CBA7", //
  "#EDBB99", //
  "#D6EAF8", //
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
