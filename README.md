SinglyLinkedList.js
===================

SinglyLinkedList.js is a singly linked-list built in JavaScript. Its goal is to resemble [JavaScript's Array object](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array) as closely as possible.

How to use
----------

The `SinglyLinkedList` object aims to resemble JavaScript's `Array` object as closely as possible. **In general, just consult [JavaScript's Array API](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array) for how to use.**

There are a few quirks, however.

```javascript
// Accessing elements is different
var array = [1, 2, 3];
array[1];
array[2] = 5;
var list = new SinglyLinkedList(1, 2, 3);
list.element(1);
list.element(2, 5);
```

```javascript
// Getting the length is different
var array = [1, 2, 3];
array.length;
var list = new SinglyLinkedList(1, 2, 3);
list.length();
```

```javascript
// You can turn it into an array
var list = new SinglyLinkedList(1, 2, 3);
var array = list.toArray();
```

```javascript
// You can create one from an array
var array = [1, 2, 3];
var list = new SinglyLinkedList(array);
```

Completion status
-----------------

* Completed
  * Constructor
  * Accessors (as `element()` method)
  * Assignment (as `element()` method)
  * [`length()`](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/length) (instead of `length` property)
  * [`pop()`](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/pop)
  * [`push()`](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/push)
  * [`shift()`](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/shift)
  * [`unshift()`](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/unshift)
  * [`join()`](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/join)
  * [`toString()`](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/toString)
  * [`indexOf()`](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf)
  * [`reverse()`](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/reverse)
  * [`sort()`](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/sort)

* Not implemented yet
  * [`splice()`](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/splice)
  * [`concat()`](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/concat)
  * [`slice()`](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/slice)
  * [`lastIndexOf()`](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/lastIndexOf)
  * [`filter()`](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/filter)
  * [`forEach()`](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/forEach)
  * [`every()`](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/every)
  * [`map()`](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/map)
  * [`some()`](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some)
  * [`reduce()`](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/reduce)
  * [`reduceRight()`](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/reduceRight)

* Intentionally not implemented
  * [`isArray()`](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray) -- use `foo instanceof SinglyLinkedList` instead
  * [`toSource()`](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/toSource) -- it's weird

Other stuff
-----------

* License information is in the LICENSE file.
* Enjoy!