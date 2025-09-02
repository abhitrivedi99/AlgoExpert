function counter(start = 0) {
	let value = start;

	return {
		inc: function () {
			value += 1;
			return value;
		},
		dec: function () {
			value -= 1;
			return value;
		},
		get: function () {
			return value;
		},
	};
}

const count = counter(10);

console.log(count.inc());
console.log(count.dec());
console.log(count.get());
