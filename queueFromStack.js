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

class QueueFromStack {
	constructor() {
		this.first = new Stack();
		this.second = new Stack();
	}

	add(record) {
		this.first.push(record);
	}

	remove() {
		while (this.first.peek()) {
			this.second.push(this.first.pop());
		}
		const last = this.second.pop();
		while (this.second.peek()) {
			this.first.push(this.second.pop());
		}
		return last;
	}

	fetch() {
		console.log(this.first);
	}

	peek() {
		while (this.first.peek()) {
			this.second.push(this.first.pop());
		}

		const record = this.second.peek();

		while (this.second.peek()) {
			this.first.push(this.second.pop());
		}
		return record;
	}
}

const a = new Stack();
const b = new Stack();
const queue1 = new QueueFromStack(a, b);

queue1.add(1);
queue1.add(2);
queue1.add(3);
console.log(queue1.peek());
console.log(queue1.remove());
console.log(queue1.peek());

// console.log(weave(queue1, queue2))
