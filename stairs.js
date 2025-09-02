function steps(int) {
	for (let i = 0; i < int; i++) {
		let line = '';
		for (let j = 0; j <= int; j++) {
			if (j <= i) {
				line += '#';
			} else {
				line += ' ';
			}
		}
		console.log(line);
	}
}

console.log(steps(4));
