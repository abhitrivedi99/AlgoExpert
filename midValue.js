class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor(values = []) {
		this.head = null;

		for (let value of values) {
			this.insertLast(value);
		}
	}

	insertFirst(data) {
		this.head = new Node(data, this.head);
	}

	size() {
		let count = 0;
		let node = this.head;
		while (node) {
			count++;
			node = node.next;
		}
		return count;
	}

	getFirst() {
		return this.getAt(0);
	}

	getLast() {
		return this.getAt(this.size() - 1);
		if (!this.head) return null;

		let node = this.head;
		while (node) {
			if (!node.next) return node;
			node = node.next;
		}
	}

	clear() {
		this.head = null;
	}

	removeFirst() {
		if (!this.head) return null;
		this.head = this.head.next;
	}

	removeLast() {
		if (!this.head) return;
		if (!this.head.next) {
			this.head = null;
			return;
		}
		let current = this.head.next,
			previous = this.head;

		while (current.next) {
			previous = current;
			current = current.next;
		}

		previous.next = null;
		return;
	}

	insertLast(data) {
		const last = this.getLast();

		if (last) {
			last.next = new Node(data);
		} else {
			this.head = new Node(data);
		}
	}

	getAt(index) {
		let counter = 0;
		let node = this.head;

		while (node) {
			if (index === counter) {
				return node;
			}
			node = node.next;
			counter++;
		}

		return null;
	}

	removeAt(index) {
		if (!this.head) return;

		if (index === 0) {
			this.head = this.head.next;
		}

		const previous = this.getAt(index - 1);

		if (!previous || !previous.next) {
			return;
		}
		previous.next = previous.next.next;
	}

	insertAt(data, index) {
		if (!this.head) {
			this.head = new Node(data);
			return;
		}

		if (index === 0) {
			this.head = new Node(data, this.head);
			return;
		}

		const previous = this.getAt(index - 1) || this.getLast();
		const node = new Node(data, previous.next);
		previous.next = node;
	}

	forEach(fn) {
		let node = this.head;
		let counter = 0;

		while (node) {
			fn(node, counter);
			node = node + next;
			counter++;
		}
	}
}

const list = new LinkedList([]);

const l = new LinkedList();
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');

l.head = a;
a.next = b;
b.next = c;
c.next = b;

function midPoint(list) {
	let slow = list.getFirst(),
		fast = list.getFirst();

	while (fast.next && fast.next.next) {
		slow = slow.next;
		fast = fast.next.next;
	}

	return slow;
}

function circularList(list) {
	let slow = list.getFirst(),
		fast = list.getFirst();

	while (fast.next && fast.next.next) {
		slow = slow.next;
		fast = fast.next.next;

		if (slow === fast) {
			return true;
		}
	}

	return false;
}

circularList(l);
