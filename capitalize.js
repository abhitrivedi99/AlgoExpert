function capitalise(str) {
	const arr = str.split(' ');

	const newArr = [];

	for (let element of arr) {
		newArr.push(element[0].toUpperCase() + element.slice(1));
	}

	return newArr.join(' ');
}

console.log(capitalise('a banana ripen'));
