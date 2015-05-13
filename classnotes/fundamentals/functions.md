# Functions
- Anatomy
- Local variables
- Modularity

# Functions

Functions, just like their mathematical namesake, can take a input value and can return an output. Functions are repeatable blocks of code that may be called with varying inputs.

Functions are defined and invoked.

**Definition**
```
var add = function(x, y) {
  return x + y;
}
```

* The `function` keyword declares a function definition.
* `add` is the name of the function.
* `x` and `y` are parameters/arguments that we pass in to the function.
* Curly braces are the function body. The code that will be executed on calling.
* the `return` keyword comes before the expression the function will return. If the `return` is omitted, the function will return `undefined`.

**IMPORTANT**: It does not matter what name we give to the arguments in parentheses, so long as we use the same names in the function body.

**Invocation**

```
add(1,2);
> 3

add(10,-3);
> 7
```

We invoke it with parentheses and if the function accepts arguments, we pass these into the parentheses separated by a comma. The order of arguments when called map directly to the order in the function definition.

A function can be described as pure, whereby given the same input it will always return the same output. Our `add` function is pure.

Some functions are not pure and have side effects. `console.log()` will print to console any value that is pass into it. The printing of the value is a side effect, and `console.log` will always return `undefined`.

## Scope

Scope refers to what can be seen from within a function. The body of the function is a new scope and its contents are hidden from the scope in which is was defined.

the variables `x`, `y` in our `add` function are only available within the function body.

Sometimes we will need to declare variables within a function. As these new variables are scoped to function that created them they cannot be seen from outside the function. Additionally, they will only last for the duration of the function call.

```
function add(x, y) {
  var z = x + y;
  return z;
}

z // ReferenceError
```

However, variables declared in the scope the function was defined in can be accessed from inside the function body, even though the variable was not explicitly passed in. This is a closure.

```
var z = 0;

function add(x, y) {
  z = x + y;
  return z;
}

z; // 0

add(1,2); // 3

z; // 3
```

### Exercises

1. Write a function that prints all the even numbers between 1 and 100.

2a. Write a function that returns an array of the numbers between 1 and 100 that are divisible by 3.

3. Write a function 'get_max' that takes a list of numbers and returns the max of those numbers, don't use the max() function.

4. Write a function 'is_odd_or_div_by_7' that returns True if a number is odd or divisible by 7 and false otherwise.

5. Given a list of food orders, e.g. ["burger", "fries", "burger", "tenders", "apple pie"], write a function 'get_aggregate_order_counts' that takes the list
and returns a dictionary with the different dishes as keys and the number of times they appear in the list as the values. For example,

It takes `["burger", "fries", "burger", "tenders", "apple pie"]` and outputs
    {
       "burger": 2,
       "fries": 1,
       "tenders": 1,
       "apple pie": 1
    }
