class Queue {
	constructor() {
		this.data = [];
	}

	add(record) {
		this.data.unshift(record);
	}

	remove() {
		return this.data.pop();
	}

	fetch() {
		console.log(this.data);
	}

	peek() {
		return this.data[this.data.length - 1];
	}
}

const queue1 = new Queue();
const queue2 = new Queue();
queue1.add(1);
queue1.add(2);
queue2.add('Hi');
queue2.add('There');
console.log(queue1.peek());

function weave(src1, src2) {
	const q = new Queue();
	console.log({ q });
	while (src1.peek() || src2.peek()) {
		if (src1.peek()) q.add(src1.remove());
		if (src2.peek()) q.add(src2.remove());
	}
	console.log({ q });
	return q.fetch();
}

console.log(weave(queue1, queue2));
