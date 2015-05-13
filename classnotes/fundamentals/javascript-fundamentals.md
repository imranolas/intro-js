## JS Basics

Javascript is the language of the web. It is the only language available in most browsers, and has reached major adoption and consistency in its implementation. Due to it being a ubiquitious as a browser language it is normally thought of as a client-side/frontend language. However, in recent years Javascript has become a very popular server side/backend language with the help of projects such as Node.js and IO.js.

A programming language is a tool for creating computer programs. A computer program is simply a set of instructions, written in a programming language that is interpreted by the computer to perform an action.


###Working with Javascript

**Running Code**

There are two ways of running Javascript code:  

* interactively in a REPL
* by running a file of .js code

TIP: Make your code readable and write comments. This will help you and other people to read your code later.

The Javascript we will be focussing on, is run in the browser. Therefore we can use the browser to execute and evaluate our code. The browser will become part of our development environment.

* Open up your Chrome Web Browser.
* Hit CMD+ALT+J, or View > Developer > Javascript Console.

You should now see your dev tools open at the bottom of you screen. You may have used the dev tools before if you've written and debugged HTML/CSS.

With the console tab selected we should have a `>` prompting us with a flashing cursor. This is our REPL.

REPL stands for Read Evaluate Print Loop. Instructions can be entered (**read**) and upon hitting return they will be **evaluated**. The result/return value of the expression is **printed** and we are returned to a new prompt (**loop**).

The REPL is a convenient place to interogate and experiment with snippets of Javascript code. We will use it to learn Javascript and later on you will use it to debug the code in your applications. The environment of this REPL instance is bound to this page only, any stored values we generate will be lost upon refreshing the page.


**Scripts**

The console is a good place to get immediate feedback whilst learning/debugging but we will write our application code to file. This file must be loaded by the page to run our application. All javascript files have a `*.js` file extension.

We can load files into our webpage by adding a script tag with a src attribute.

```
<head>
  ...
  <script src='./path/to/file.js'></script>
<head>
<body>
  ...
  <script src='./path/to/file.js'></script>
<body>
```

The script tag can be in the head or body of the document and multiple scripts can be loaded.

IMPORTANT: The order of loading matters. One file may depend on another to have been loaded first.

IMPORTANT: Some scripts may interact with elements on the page. These scripts must be loaded at the end of the body, once the elements are available.

Quote from Douglas Crockford

  JavaScript, aka Mocha, aka LiveScript, aka JScript, aka ECMAScript, is one of the world's most popular programming languages. Virtually every computer in the world has at least one JavaScript interpreter installed on it and in active use. JavaScript's popularity is due entirely to its role as the scripting language of the WWW.

  Despite its popularity, few know that JavaScript is a very nice dynamic object-oriented general-purpose programming language.

  ## The Name

  The Java- prefix suggests that JavaScript is somehow related to Java, that it is a subset or less capable version of Java. It seems that the name was intentionally selected to create confusion, and from confusion comes misunderstanding. JavaScript is not interpreted Java. Java is interpreted Java. JavaScript is a different language.

  JavaScript has a syntactic similarity to Java, much as Java has to C. But it is no more a subset of Java than Java is a subset of C. It is better than Java in the applications that Java (fka Oak) was originally intended for.

  JavaScript was not developed at Sun Microsystems, the home of Java. JavaScript was developed at Netscape. It was originally called LiveScript, but that name wasn't confusing enough.

  The -Script suffix suggests that it is not a real programming language, that a scripting language is less than a programming language. But it is really a matter of specialization. Compared to C, JavaScript trades performance for expressive power and dynamism.

### JS documentation
Finding things out.
  - GDD - Google driven development
  - Stack overflow
  - MDN docs

### JavaScript Variables

All data in Javascript are objects. We can ask these objects what their class is by prefixing them with `typeof`. Unfortunately we can't always rely on the value that is returned as sometimes Javascript will just tell us thing are 'objects'. For simple data types however, `typeof` can be useful.

We can store values in "variables"

```
> var my_greeting = "hello world!";
> typeof my_greeting
=> 'string'
```

Notice the var keyword. We must use var the first time we **declare** a variable. This is very important to include but annoyingly Javascript won't complain if you omit it.

Variables in JavaScript are **mutable**, this means that we can change them. So we can do:  

```
> var a = 2;
> a;    RETURNS   2  
> a = 5;  
> a;    RETURNS   5  
```

It is convention in Javascript that we use **camel case** ie. `firstName` when we are naming variables. The convention for writing constants is **capital**, ie. `NAME`, but constants are not enforced by Javascript.

### Undefined/Null

### Methods/Properties

In Javascript objects interact with one another by using what are called methods or properties. More specifically, we can "call or invoke the methods" of an object. So when we type `"hello".length`, we are calling the "length" property on a string.

Remember the "greeting" example?  

```
> var myGreeting = "Hello World!";
> typeof myGreeting;
=> String
```

```
> myGreeting.length;
=> 12
```

When we call `toUpperCase()` we must use parentheses. This means we are invoking the method. Methods are a set of instructions to perform some work and need to be invoked.

```
> myGreeting.toUpperCase();
=> "HELLO WORLD!"
```

`myGreeting` hasn't changed. toUpperCase does not mutate the original string, it returns a new one. This is good. Imagine printing delivery labels and sending a dispatch email to a user, the labels require an uppercase name but the email doesn't. We don't want the action for one to affect the other.

```
> myGreeting;
=> "Hello World!"
```

###Basic arithmetic in JavaScript

Available operators
`+` plus  
`-` minus  
`*` multiply  
`/` divide
`%` modulus (remainder)
`++x` adds and returns the new value  
`x++` adds and returns the original value  
`--x` subtracts and returns the new value
`x--` subtracts and returns the original value


WARNING! Don't expect the fractional or decimal answers to be correct. Computers suffer from floating point errors.
```
> 0.101 * 3
=> 0.3033333333333335
```
Stick to integer maths where possible.

We can use operators to do any type of arithmetic. We can also use parentheses to delimit statements just as we would do in math.

**Modulo** is a useful operator for return just the remainder of any division. is Even?

### Booleans

Table 3 truth table for the && operator
A	    B	    A && B
True	True	True
True	False	False
False	True	False
False	False	False

Table 4 truth table for the || operator
A	    B	    A || B
True	True	True
True	False	True
False	True	True
False	False	False

We only have two states in booleans: "true" or "false".  
`true` is  TrueClass  
`false` is FalseClass  

We also have something called "boolean logic":  
`||` - or  
`&&` - and

So if we type:  
`true || true`    RETURNS   `true`  
`true || false`    RETURNS   `true`  
`false || false`    RETURNS   `false`  
JavaScript will only check the first value. As it returns true, it will not bother checking the second value.

`true && true`    RETURNS     `true`  
`true && false`    RETURNS     `false`  
JavaScript will check both values to ensure they are both true when using &&.

`null || false`    RETURNS     `false`  
In JavaScript null is the same as false.

```
 false || true && true

 true || false && true || false && false

 false || true && true || false || alert('I got here!')
 false || true && false || false || alert('I got here!')
```

We can manipulate our booleans to tell JavaScript to return a boolean value
`var x = "hello";`  
`var isXTruthy = !!x;`  
`x`     RETURNS     `"hello"`  
`isXTruthy ` RETURNS   `true`

### Equality
Often we need to compare values for equality. This is the most frequent way to generate a boolean type.

`===` Equal to
`==` Equal to (coersed)
`!==` Not equal to
`>`  more than  
`<`  less than  
`>=`  more than or equal to  
`<=`  less than than or equal to  


### Strings

If we use the addition operator on strings, we will concatenate them. So `"5" + "5"` will return `"55"`

**Concatenation**

We can join strings together by using concatenation  
`var h = "hello"`  
`var w = "world"`  
`var space = " "`  
`h + space + w`     RETURNS     `"hello world"`  


#### Displaying strings

`console.log()` is a method that will output a value to the console. We use it often to debug our applications.

To use it we just pass it the thing we want to log as an argument.

```
> console.log('Hello World!')
> "Hello World!"
=> undefined
```

#### Getting input from the user

  var input = prompt('Say hello world...')
  => "hello world"

  alert(input)


### Conditionals

We will use conditionals regularly in our code to make decisions.
```
if(1 < 2) {
 "foo"
}

> "foo"
```

Curly braces define a block of code. The whole block will run under this condition, but only the last value will be returned. We can use `else` to handle the falsey condition.

```
if (1 > 2) {
  "foo"
} else {
  "bar"
}

> "bar"
```

Finally, the ternary operator is used to shorten an "if...else" statement.  
`1 < 2 ? "foo" : "bar"  ` RETURNS   `"foo"`


### switch statements

We use case statements to test a value against specific conditions.
Example:  

```
$ var js = "awesome"
=> "awesome"

switch (js) {
  case "awesome":
    "woot";
    break;
  case "rubbish":
    "booooo";
    break;
}
```

Another example:
```
var expr = "Apples";

switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log("Sorry, we are out of " + expr + ".");
}
```

### Loops

With all loops we need to make sure we break out in some way, otherwise we could end up in an infinite loop. Which is bad.

#### `For` loop

`for` loops require three elements.
  - Starting point
  - Condition
  - Instruction for the end of each iteration, normally increment

```
for(var i=0; i <= 10; i++) {
  console.log(i);
}

=> 1 2 3 4 5 6 7 8 9 10
```

#### `While` loop
`while` loops are like looping `if` statements. They expect a condition and will continually loop until the condition fails. If we don't provide a way for the condition to fail we can easily end up with an infinite loop.

```
var n = 0;
var x = 0;

while (n < 3) {
  n++;
  x += n;
}
```
