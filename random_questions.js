var quoteArray = [
  { quote: "You can pick one superpower, which one would you? 'With big powers come big responsabilities', what do you do with this super power?" },
  { quote: "What do you do in life that is not in your resume?" },
  { quote: "Did you ever face a corpse?" },
  { quote: "Could you become vegetarian? Vegan?" },
  { quote: "Do you have scars? Where do they come from?" },
  { quote: "Do you think ghosts are real?\rWhat about aliens?" },
  { quote: "What was your first car?" },
  { quote: "Dog or cat?" },
  { quote: "Phò or Ramen?" },
  { quote: "Did you ever had a pet? What type of pet was it? What was it's name?" },
  { quote: "Would you use a selfdriving car without human driver? Without pedals and steering wheel?" },
  { quote: "What is the hardest habits you decided to get rid of? Why? Do you still hold on it?" },
  { quote: "Which seat do you usualy pick: window or aisle?" },
  { quote: "Are you a morning person?" },
  { quote: "Did you ever go on holidays on your own? Where was it? How long did it last? Did you like it?" },
  { quote: "According to you, what has been the most decisive moment of your life so far?" },
  { quote: "What people use to say about you when you were a kid?" },
  { quote: "Do you remember the first contact you had with the Internet?" },
  { quote: "What are your favorite shoes?" },
  { quote: "Do you own a library card?" },
  { quote: "What is your morning routine?" },
  { quote: "Are you a snooze person?" },
  { quote: "You have to get ride of one of your 5 senses, which one do you give up on?" },
  { quote: "Do you remember when you had an encounter a wild animal?" },
  { quote: "Do or did you play an musical instrument?" },
  { quote: "Do you shower in the evening or in the morning?" },
  { quote: "Comté or St-Nectaire?" },
  { quote: "What is your daily coffee maker?" },
  { quote: "What is your favorite coffee maker?" },
  { quote: "Are up to date regarding your vaccins?" },
  { quote: "Do you make your bed every morning?" },
  { quote: "What is your home office outfit?" },
  { quote: "Do you like to take naps?" },
  { quote: "If you had to hide a corpse, who would you call first?" },
  { quote: "What do you usually you have for breakfast?" },
  { quote: "What is your worst hotel experience?" },
  { quote: "Are you friend with your parents on social media?" },
];

var colorArray = [
  "#D9D309", //
  "#F28123", //
  "#D34E24", //
  "#563F1B", //
  "#38726C", //
  "#065143", //
  "#129490", //
  "#70B77E", //
  "#CE1483", //
  "#247BA0", //
  "#70802A", //
  "#14BDEB", //
  "#2B4162", //
];

$(document).ready(function () {
  nextQuote();
}); // end of document ready function

var pickedQuotes = [];
var pickedColors = [];

function nextQuote() {

  // if no more quote in quoteArray, reset quoteArray and pickedQuotes
  if (quoteArray.length == 0) {
    quoteArray = pickedQuotes;
    pickedQuotes = [];
  }

  if (colorArray.length == 0) {
    colorArray = pickedColors;
    pickedColors = [];
  }

  let randomColor = colorArray.splice(Math.floor(Math.random() * colorArray.length), 1)[0];
  let randomQuote = quoteArray.splice(Math.floor(Math.random() * quoteArray.length), 1)[0];

  pickedQuotes.push(randomQuote);
  pickedColors.push(randomColor);

  console.log(quoteArray);
  console.log(pickedQuotes);
  
  $("#quote-text").text(
    randomQuote.quote);

  $("body").css("background-color", randomColor);
  $("#quote-text").css("color", randomColor);
  $("#quote-box button").css("background-color", randomColor);
  $("i").css("color", randomColor);
}
