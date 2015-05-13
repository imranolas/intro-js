# Objects
- Properties
- Dot notation vs. Bracket notation

Like arrays, objects are another type of collection. The main difference is, whilst Arrays are ordered and keyed by index, objects are keyed by properties. This sounds complicated but is in fact very simple.

    var person = {
      name: 'Jim',
      age: 35,
      likes: ['cheese', 'football', 'green']
      say: function() {
        return 'Hello';
      }
    }

Objects store key/value pairs. We can fetch the data from an object using brackets just as we did with arrays.

  person['name'] // 'Jim'
  person['age'] // 35

We can also use dot notation.

  person.name // 'Jim'
  person.age // 35

  person.say() // 'Hello'

Both methods are equivalent and commonly used.

We can add properties to an existing object.

    person.weight = 80;
    person.weight // 80

... and remove them

    delete person.weight
    person.weight; // undefined

and modify existing properties

    person.name = 'Jane';

Objects are a useful way to store related data in a consistent manner, consequently we often find arrays of objects that we can map over.
