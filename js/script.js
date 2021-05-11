/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/

var quotes = [
  {
    quote:
      "I will tell you how to become rich. Close the doors. Be fearful when others are greedy. Be greedy when others are fearful.",
    source: "Warren Buffet",
    citation: "Investopedia",
    year: "2021",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    source: "Nelson Mandela",
    citation: "Hubspot",
    year: "2018",
  },
  {
    quote: "Love yourself as you will be with you at every moment of your life",
    source: "Lovepreet Singh",
  },
  {
    quote: "Always choose a lazy person to do a difficult task",
    source: "Bill Gates",
  },
];

/***
 * `getRandomQuote` function
 ***/

function getRandomQuote() {
  // console.log(quotes[0]);
  //generate a random number.
  var randomNumber = Math.floor(Math.random() * quotes.length);
  //console.log(randomNumber);

  //get the quotes corresponding to the number.

  var randomQuote = quotes[randomNumber];
  //console.log(randomQuote);

  //return the quote/

  return randomQuote;
}

/***
 * `printQuote` function
 ***/

function printQuote() {
  let randomQuote = getRandomQuote();

  //lets print it.

  var quoteString = "";

  if (!(randomQuote.citation && randomQuote.year)) {

    //console.log(randomQuote);

    quoteString =
      "<p class='quote'>" +
      randomQuote.quote +
      "<p class='source'>" +
      randomQuote.source;
  } else {
    quoteString =
      '<p class="quote">' +
      randomQuote.quote +
      '</p> <p class="source">' +
      randomQuote.source +
      '<span class="citation">' +
      randomQuote.citation +
      '</span> <span class="year">' +
      randomQuote.year +
      "</span> </p>";
  }

  document.getElementById("quote-box").innerHTML = quoteString;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
