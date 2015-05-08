/* global $ */
"use strict";

function makeTodo(text) {
  var $todo = $(
    "<li class='todo'>" +
      text +
      " " +
      "<button class='delete'>x</button>" +
    "</li>"
  );

  // Add click handler to remove todo
  $todo.find(".delete").on("click", function(e) {
    e.preventDefault();
    $(this).parent("li.todo").remove();
  });

  return $todo;
}

// Add a todo
$("#save-button").on("click", function(e) {
  e.preventDefault(); // Prevent default
  var $input = $("#input-field"); // Fetch the input field
  $(".todo-list").append(makeTodo($input.val())); // Add the field to the end of the container
  $input.val(""); // Clear the field
});

/*
 *	Further exercises
 *	- Mark as completed; styled with a strikethrough.
 *	- delete all todos
 *	- delete all completed todos.
 *	- Edit a todo. Inline editing.
 */
