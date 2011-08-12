SinglyLinkedList.js
===================

SinglyLinkedList.js is a singly linked-list built in JavaScript. Its goal is to resemble [JavaScript's Array object](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array) as closely as possible.

How to use
----------

The `SinglyLinkedList` object aims to resemble JavaScript's `Array` object as closely as possible. Here's how you use it:

### Creating and accessing elements ###

```javascript
var list = new SinglyLinkedList();
list.push(10);      // add 10 to the end of the list
list.element(0);    // first element = 10
list.element(0, 5); // assign first element to 5
list.element(0);    // first element = 5
list.push(12);      // add 12 to the end of the list
list.length();      // length of list: 2
```