## Events

jQuery makes it easy to respond to user interaction with a web page. This means that you can write code that runs when a user clicks on a certain part of the page, or when she moves her mouse over a form element. For example, this code listens for a user to click on any li element in the page:

    $('li').on('click', function( event ) {
      console.log( 'clicked', $( this ).text() );
    });

The code above selects all list items on the page, then binds a handler function to the click event of each list item using jQuery's .click() method.

Methods such as `.click()`, `.blur()`, `.change()`, and others are "shorthand" methods for event binding. jQuery provides a number of these shorthand methods, each of which corresponds to a native DOM event:
