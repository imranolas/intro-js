## Exercises

### Sum of numbers

* Print the sum of numbers from 1 to 100
* Make a function to do the same but for numbers 1 to n

###FizzBuzz

* Print all the numbers from 1 to 100.
* Where a number is divisible by 3, replace it with 'Fizz'
* Where a number is divisible by 5, replace it with 'Buzz'
* Where a number is divisible by both 3 and 5, replace it with 'FizzBuzz'

* We will need to **loop** from 1 to 100
* For each iteration in the loop, **log** the number.
* **Conditionally** check whether the number is divisible by 3.
  * Does the number have a remainder (**modulu**)?,
  * **If** it doesn't, **log** the 'Fizz'.
  * repeat for other values.

### Min/Max

Given an array of random numbers. Print out the largest and smallest in the list.

* Loop over the array.
* Check each number against the previous largest. Reassign the number if it is larger.
* Repeat for the smallest numbers.

### Reverse a string

Write a function to reverse a string. There is a String method called reverse() that will do this for you.
Obviously, try the exercise without it.

TIP: Strings behave like arrays, we can fetch the character at any given index. `'hello'[1] // 'e'`

```
  reverse('hello');
  // 'elloh'
```

### Palindrome

Write a function to test whether a string is a palindrome. Palindromes are words that appear the same when reversed.
