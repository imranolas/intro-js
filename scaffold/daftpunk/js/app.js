var soundNames = [ "after",
  "better",
  "do_it",
  "ever",
  "faster",
  "harder",
  "hour",
  "make_it",
  "makes_us",
  "more_than",
  "never",
  "over",
  "stronger",
  "work_is",
  "work_it" ];

var afterSound = new Howl({
  urls: ['wav/after.wav']
});

var afterButton = $('#after').click(function() {
  afterSound.play();
});
