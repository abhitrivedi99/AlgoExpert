class Stack {
	constructor() {
		this.data = [];
	}

	push(record) {
		this.data.push(record);
	}

	pop() {
		return this.data.pop();
	}

	fetch() {
		console.log(this.data);
	}

	peek() {
		return this.data[this.data.length - 1];
	}
}

const queue1 = new Stack();
const queue2 = new Stack();
queue1.push(1);
queue1.push(2);
queue1.peek();
queue1.fetch();
queue1.pop();
queue1.pop();
queue1.peek();
queue1.fetch();
