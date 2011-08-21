/**********************
 * Singly linked list *
 **********************/

// Constructor
var SinglyLinkedList = function() {

	// Config
	this.defaultJoinSeparator = ",";

	// Initial values
	this.first;

	// Deal with arguments
	var argsLength = arguments.length;
	if (argsLength === 1) {

		// The argument is an array?
		if (arguments[0] instanceof Array) {

			var arrLength = arguments[0].length;
			for (var i = 0; i < arrLength; i ++) {
				this.push(arguments[0][i]);
			}

		} else {

			// It's a number, so let's make it that size
			for (var i = 0; i < arguments[0]; i ++) {
				this.push(void 0);
			}

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
	
	// To array
	toArray: function() {
		var toReturn = [];
		var at = this.first;
		while (typeof at !== "undefined") {
			toReturn.push(at.value);
			at = at.next;
		}
		return toReturn;
	},

	// Pop
	pop: function() {

		// The first one is undefined, so we're done
		if (typeof this.first === "undefined") {
			return;
		}

		// There's only one, so return the first one
		if (typeof this.first.next === "undefined") {
			var toReturn = this.first.value;
			this.first = void 0;
			return toReturn;
		}

		// Find the last one and keep going
		var at = this.first;
		while (typeof at.next.next !== "undefined") {
			at = at.next;
		}
		var toReturn = at.next.value;
		at.next = void 0;
		return toReturn;

	},

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
	},
	
	// Reverse TODO
	
	// Shift
	shift: function() {

		// Empty; return undefined
		if (typeof this.first === "undefined") {
			return;
		}

		// Return the last one
		var toReturn = this.first.value;
		this.first = this.first.next;
		return toReturn;

	},
	
	// Sort TODO
	
	// Splice TODO
	
	// Unshift
	unshift: function() {
		var argsLength = arguments.length;
		for (var i = 0; i < argsLength; i ++) {

			// Make a new node
			var node = {};
			node.value = arguments[i];

			// Place it
			if (typeof this.first === "undefined") {
				this.first = node;
			} else {
				node.next = this.first;
				this.first = node;
			}

		};
		return this.length();
	},

	// Concat TODO
	
	// Join
	join: function(separator) {

		// Default separator
		if (typeof separator === "undefined") {
			separator = this.defaultJoinSeparator;
		}

		// Let's do it!
		var toReturn = "";
		var at = this.first;
		while (typeof at !== "undefined") {
			toReturn += at.value;
			at = at.next;
			if (typeof at !== "undefined") {
				toReturn += separator;
			}
		}
		return toReturn;

	},
	
	// Slice TODO

	// Convert to a string
	toString: function() {
		return this.join();
	},
	
	// indexOf
	indexOf: function(searchElement, fromIndex) {

		// Default index
		if (typeof fromIndex === "undefined") {
			fromIndex = 0;
		}

		// Go through until we find the first
		var count = 0;
		var at = this.first;
		while (typeof at !== "undefined") {
			if ((at.value === searchElement) && (count >= fromIndex)) {
				return count;
			}
			at = at.next;
			count ++;
		}
		return -1;

	}
	
	// lastIndexOf TODO
	
	// filter TODO
	
	// forEach TODO
	
	// every TODO
	
	// map TODO
	
	// some TODO
	
	// reduce TODO
	
	// ReduceRight TODO

};