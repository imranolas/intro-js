/* global $ */
"use strict";

var answers = [
  { answer: "It is certain", value: "positive" },
  { answer: "It is decidedly so", value: "positive" },
  { answer: "Without a doubt", value: "positive" },
  { answer: "Yes definitely", value: "positive" },
  { answer: "You may rely on it", value: "positive" },
  { answer: "As I see it, yes", value: "positive" },
  { answer: "Most likely", value: "positive" },
  { answer: "Outlook good", value: "positive" },
  { answer: "Yes", value: "positive" },
  { answer: "Signs point to yes", value: "positive" },
  { answer: "Reply hazy try again", value: "neutral" },
  { answer: "Ask again later", value: "neutral" },
  { answer: "Better not tell you now", value: "neutral" },
  { answer: "Cannot predict now", value: "neutral" },
  { answer: "Concentrate and ask again", value: "neutral" },
  { answer: "Don't count on it", value: "negative" },
  { answer: "My reply is no", value: "negative" },
  { answer: "My sources say no", value: "negative" },
  { answer: "Outlook not so good", value: "negative" },
  { answer: "Very doubtful", value: "negative" }
];

$("button").on("click", function(e) {
  e.preventDefault();
  $(".question").text($("#input-field").val()); // Fetch the input value
  var index = Math.floor(Math.random() * answers.length); // Generate a random index

  $(".answer")
    .text(answers[index].answer) // Set the text
    .removeClass("neutral negative positive") // reset value class
    .addClass(answers[index].value); // Add the value class

  $("#input-field").val(""); // Clear the input field
});


/*
 * Add a function that validates whether a question was asked.
 * - if not display some other message
 */
