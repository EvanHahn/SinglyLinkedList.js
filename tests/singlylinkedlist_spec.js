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

});