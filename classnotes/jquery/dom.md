# Document Object Model

We write our html and css as text. It is text that is transferred over the internet and consumed by our browser. Our browser reads this text and has to make sense of it to display something of value to the user.

The result of the browser reading this text is the Document Object Model. It is a computed model of what the page looks like and how it should behave. We can ask the DOM for information about our page and the elements it contains. Most of this information is only available once the page has been rendered and only in the DOM.

**What does it look like?**

In our dev tools we can see a representation of the DOM when we inspect elements. The html we see is infact generated from the DOM, which in turn is generated from our textual HTML. We can see the styles that were or weren't applied by our stylesheet. We can also see computed styles that have been calculated in runtime by the DOM.

With our javascript fundamentals, we've not interacted with the DOM yet. Fortunately, because we are writing javascript in a browser environment we have access to the DOM using the DOM api.

**API?**

```
  document.body
  => <body ....>
```

It is that simple to fetch the body. The rest of the DOM api is a little wordy and can differ between browser vendors. The solution is to use a library that handles browser inconsistencies, and adds some syntactic sugar for dealing with the DOM.

## JQuery

JQuery is a library that must be loaded as a script on the page. It makes available to us a new object/function.

if we type `$` we should get some text that refers to JQuery. This is how we can confirm it is loaded and ready to use.

The `$()` is a function that lets us query the DOM for elements. Once we have the element instance we can modify it in just about anyway we can imagine.

$(document.body) is a jQuery object. The $() is actually a function in disguise; it turns the document into a jQuery object.

In fact we can select any element using CSS selectors.

```
> var list = $('ul')
> list.hide();
> list.show();
```
We refer to the result as a selection.

`hide()` and `show()` are methods that can be called on JQuery selections, and will hide or show respectively. We can be more descriptive about how the the elements should animate by passing in 'slow' or 'fast' as parameters.

hiding and showing is such common behaviour that we can handle both actions using `toggle()`.
---

### Getter/Setter
We can fetch the content of an element by calling `text()`. If we don't provide a parameter, the function will **get** the value. If we do provide a parameter, it will **set** the parameter as the value.

This is very common pattern in jQuery, if you find yourself using a method to get a value, you can likely use the same one to set values too.

### Implicit iteration

Implicit iteration means that jQuery automatically iterates over all the elements in a selection when you call a setter method on that selection. This means that, when you want to do something to all of the elements in a selection, you don't have to call a setter method on every item in your selection — you just call the method on the selection itself, and jQuery iterates over the elements for you.
