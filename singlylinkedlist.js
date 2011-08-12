/**********************
 * Singly linked list *
 **********************/

// Constructor
var SinglyLinkedList = function() {

	// Initial values
	this.first;

	// Deal with arguments
	var argsLength = arguments.length;
	if (argsLength === 1) {
		// There's only one argument: the length will be this argument
		for (var i = 0; i < arguments[0]; i ++) {
			this.push(void 0);
		}
	} else if (argsLength > 1) {
		// More than one argument: add everything in here
		for (var i = 0; i < argsLength; i ++) {
			this.push(arguments[i]);
		}
	}

};

SinglyLinkedList.prototype = {

	// Length
	length: function() {
		if (typeof this.first === "undefined") {
			return 0;
		}
		var count = 1;
		var at = this.first;
		while (typeof at.next !== "undefined") {
			at = at.next;
			count ++;
		}
		return count;
	},
	
	// Accessor/assignment
	element: function(index, value) {
		var argsLength = arguments.length;
		
		// Any first value?
		if (typeof this.first === "undefined") {
			if (argsLength === 1) {	// Accessor
				return;
			} else if (argsLength === 2) {	// Assignment
				this.first = { value: value };
				return value;
			}
		}
		
		// There exists at least one value. Hunt through.
		var count = 0;
		var at = this.first;
		while ((typeof at.next !== "undefined") && (count < index)) {
			at = at.next;
			count ++;
		}
		
		// Is it out of bounds?
		if (index > count) {
			if (argsLength === 1) {	// Accessor
				return;
			} else if (argsLength === 2) {	// Assignment
				for (var i = 0; i < (index - count - 1); i ++) {
					this.push(void 0);
				}
				this.push(value);
				return value;
			}
		}
		
		// We have found it! Go for it
		if (argsLength === 1) {	// Accessor
			return at.value;
		} else if (argsLength === 2) {	// Assignment
			at.value = value;
			return value;
		}

	},

	// Pop TODO

	// Push
	push: function() {
		var argsLength = arguments.length;
		for (var i = 0; i < argsLength; i ++) {

			// Make a new node
			var node = {};
			node.value = arguments[i];

			// Place it
			if (typeof this.first === "undefined") {
				this.first = node;
			} else {
				var at = this.first;
				while (typeof at.next !== "undefined") {
					at = at.next;
				}
				at.next = node;
			}

		};
		return this.length();
	}
	
	// Reverse TODO
	
	// Shift TODO
	
	// Sort TODO
	
	// Splice TODO
	
	// Unshift TODO
	
	// Concat TODO
	
	// Join TODO
	
	// Slice TODO
	
	// toSource TODO
	
	// toString TODO
	
	// indexOf TODO
	
	// lastIndexOf TODO
	
	// filter TODO
	
	// forEach TODO
	
	// every TODO
	
	// map TODO
	
	// some TODO
	
	// reduce TODO
	
	// ReduceRight TODO

};