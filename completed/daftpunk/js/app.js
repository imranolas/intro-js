/* global $ */
// A list of all the sound filenames.
var soundNames = [
  "work_it", "make_it", "do_it", "makes_us",
  "harder", "better", "faster", "stronger",
  "more_than", "hour", "our", "never",
  "ever", "after", "work_is", "over" ];

$("#sounds").html(
  // Loop over all sound names
  soundNames.map(function(soundName) {
    return $("<div class='sound' />") // Create a div for each soundName
    .html(
      $("<span />")
      .text(soundName.replace(/_/, " "))
    ) // Set the div text to soundName and replace _ with spaces.

    .click(function(e) { // onClick handler. When the div is clicked is should load and play the sound.
      var that = this;
      e.preventDefault(); // Interupt the browsers standard behaviour.

      // Create the sound...
      new Howl({
        urls: ["wav/" + soundName + ".wav"],
        onplay: function() { $(that).addClass("playing"); },
        onend: function () { $(that).removeClass("playing"); }
      })
      .play(); // ... and play it.

    });
  })
);
