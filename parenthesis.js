function isParenthesisBalanced(str) {
	let count = 0;

	for (let char of str) {
		if (char === '(') {
			count++;
		} else if (char === ')') {
			count--;

			if (count < 0) return false;
		}
	}

	return count === 0;
}

console.log(isParenthesisBalanced2('(({)})()'));

function isParenthesisBalanced2(str) {
	const stack = [];

	const map = {
		')': '(',
		'}': '{',
		']': '[',
	};

	for (let char of str) {
		console.log({ stack, char });
		if (['[', '{', '('].includes(char)) {
			stack.push(char);
		} else if ([']', '}', ')'].includes(char)) {
			console.log({ i: map[char] });
			if (stack.pop() !== map[char]) {
				return false;
			}
		}
	}

	return stack.length === 0;
}
