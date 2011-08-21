describe("Singly linked list", function() {

	// Initialization
	it("initializes properly with no arguments", function() {
		var list = new SinglyLinkedList();
		expect(list.length()).toEqual(0);
	});
	it("initializes properly with 1 argument", function() {
		var list = new SinglyLinkedList(5);
		expect(list.length()).toEqual(5);
	});
	it("initializes properly with many arguments", function() {
		var list = new SinglyLinkedList(10, 20, 30);
		expect(list.length()).toEqual(3);
	});

	// Accessor/assignment
	it("accesses single elements within bounds", function() {
		var list = new SinglyLinkedList(10, 20, 30, 40);
		expect(list.element(0)).toEqual(10);
		expect(list.element(1)).toEqual(20);
		expect(list.element(2)).toEqual(30);
		expect(list.element(3)).toEqual(40);
	});
	it("assigns single elements within bounds", function() {
		var list = new SinglyLinkedList(10, 20, 30, 40);
		expect(list.element(0)).toEqual(10);
		expect(list.element(0, 15)).toEqual(15);
		expect(list.element(0)).toEqual(15);
		expect(list.element(1)).toEqual(20);
		expect(list.element(2)).toEqual(30);
		expect(list.element(3)).toEqual(40);
	});
	it("accesses single elements out of bounds", function() {
		var list = new SinglyLinkedList(10, 20, 30, 40);
		expect(list.element(100)).toBeUndefined();
	});
	it("assigns single elements out of bounds", function() {
		var list = new SinglyLinkedList(10, 20, 30, 40);
		expect(list.element(10, 100)).toEqual(100);
		expect(list.element(10)).toEqual(100);
	});

	// Pop
	it("pops an element off the top of a linked list", function() {
		var list = new SinglyLinkedList(10, 20, 30, 40);
		expect(list.pop()).toEqual(40);
		expect(list.pop()).toEqual(30);
		expect(list.pop()).toEqual(20);
		expect(list.pop()).toEqual(10);
	});
	it("returns undefined if you pop an empty linked list", function() {
		var list = new SinglyLinkedList();
		expect(list.pop()).toBeUndefined();
	});

	// Push
	it("pushes a single element into a linked list", function() {
		var list = new SinglyLinkedList();
		list.push(5);
		expect(list.length()).toEqual(1);
		expect(list.element(0)).toEqual(5);
	});
	it("pushes multiple elements into a linked list", function() {
		var list = new SinglyLinkedList();
		list.push(5, 10, 15);
		expect(list.length()).toEqual(3);
		expect(list.element(0)).toEqual(5);
		expect(list.element(1)).toEqual(10);
		expect(list.element(2)).toEqual(15);
	});
	it("returns the list's length when pushing", function() {
		var list = new SinglyLinkedList();
		expect(list.push(5, 10, 15)).toEqual(3);
		expect(list.push(12)).toEqual(4);
	});

	// Reverse
	it("reverses an empty linked list", function() {
		var list = new SinglyLinkedList();
		expect(list.reverse()).toEqual(new SinglyLinkedList());
		expect(list).toEqual(new SinglyLinkedList());
	});
	it("reverses a linked list with one element", function() {
		var list = new SinglyLinkedList(12);
		expect(list.reverse()).toEqual(new SinglyLinkedList(12));
		expect(list).toEqual(new SinglyLinkedList(12));
	});
	it("reverses a linked list with many elements", function() {
		var list = new SinglyLinkedList(10, 20, 30, 40);
		expect(list.reverse()).toEqual(new SinglyLinkedList(40, 30, 20, 10));
		expect(list).toEqual(new SinglyLinkedList(40, 30, 20, 10));
	});

	// Shift
	it("shifts a linked list with one element", function() {
		var list = new SinglyLinkedList();
		expect(list.shift()).toBeUndefined();
	});
	it("shifts a linked list with one element", function() {
		var list = new SinglyLinkedList(12);
		expect(list.shift()).toEqual(12);
		expect(list.length()).toEqual(0);
	});
	it("shifts a linked list with many elements", function() {
		var list = new SinglyLinkedList(10, 20, 30, 40);
		expect(list.shift()).toEqual(10);
		expect(list).toEqual(new SinglyLinkedList(20, 30, 40));
	});

	// Sort
	it("sorts an array with many elements", function() {
		var list = new SinglyLinkedList(4, 2, 3, 1);
		expect(list.sort()).toEqual(new SinglyLinkedList(1, 2, 3, 4));
	});

});