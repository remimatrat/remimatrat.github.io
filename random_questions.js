{\rtf1\ansi\ansicpg1252\cocoartf2706
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 var quoteArray = [\
  ["Be the change that you wish to see in the world.", "-Mahatma Gandhi"],\
  ["People who think they know everything are a great annoyance to those of us who do.", "-Isaac Asimov"],\
  ["The fool doth think he is wise, but the wise man knows himself to be a fool.", "-William Shakespeare"],\
  ["If you don't stand for something you will fall for anything.", "Gordon A. Eadie"],\
  ["I solemnly swear that I am up to no good.", "J.K. Rowling"]\
];\
\
var colorArray = [\
  "#FF99FF", // pinkish-purple\
  "#9999FF", // blue\
  "#00CC00", // green\
  "#FF6633", // orange\
  "#FFCC00", // yellow\
  "#999999", // gray\
];\
\
var numQuotes = quoteArray.length;\
var numColors = colorArray.length;\
\
var randomNum;\
\
var randomColor;\
var newRandomColor;\
\
var randomColorNumber = 0;\
\
// arrays each containing\
// text at index 0\
// and author at index 1\
var quote;\
var newQuote;\
\
var twitterQuote = "";\
\
$(document).ready(function() \{\
  // initialize quote to a random one\
  randomNum = newRandomNumber();\
  randomColor = newRandomColor();\
\
  quote = newQuote(randomNum);\
  twitterQuote = quote[0] + " " + quote[1];\
\
  $("#quote-text").text(\
    quote[0]);\
  $("#quote-author").text(\
    quote[1]);\
\
  $("body").css("background-color", randomColor);\
  $("#quote-text").css("color", randomColor);\
  $("#quote-author").css("color", randomColor);\
  $("#quote-box button").css("background-color", randomColor);\
  $("i").css("color", randomColor);\
\
  // whenever #new-quote-icon is clicked\
  $("#new-quote-icon").on("click", function() \{\
\
    randomNum = newRandomNumber();\
    randomColor = newRandomColor();\
\
    quote = newQuote(randomNum);\
    twitterQuote = quote[0] + " " + quote[1];\
\
    $("#quote-text").text(\
      quote[0]);\
    $("#quote-author").text(\
      quote[1]);\
\
    $("body").css("background-color", randomColor);\
    $("#quote-text").css("color", randomColor);\
    $("#quote-author").css("color", randomColor);\
    $("#quote-box button").css("background-color", randomColor);\
    $("i").css("color", randomColor);\
\
  \}); // end of new quote function\
\
  // when twitter icon is clicked\
  $("#twitter-icon").on("click", function() \{\
    window.open("https://twitter.com/intent/tweet?text=" + twitterQuote);\
  \}); // end of twitter click function\
\
\}); // end of document ready function\
\
// returns quote with index randomNum\
function newQuote(randomNum) \{\
  return quoteArray[randomNum];\
\}\
\
// returns number corresponding to\
// quoteArray indices\
function newRandomNumber() \{\
  var num = Math.floor(Math.random() * (numQuotes - 1));\
  if (num >= randomNum) \{\
    num++;\
  \}\
  return num;\
\}\
\
// returns a new random color\
// that is different than\
// the current one\
function newRandomColor() \{\
  var num = Math.floor(Math.random() * (numColors - 1));\
\
  if (num >= randomColorNumber) \{\
    num++;\
  \}\
\
  randomColorNumber = num;\
  return colorArray[num];\
\}}