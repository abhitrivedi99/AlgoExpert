function anagrams(str1, str2) {
	const map1 = getHashMap(str1);
	const map2 = getHashMap(str2);

	if (Object.keys(map1).length !== Object.keys(map2).length) {
		return false;
	}
	console.log(map1, map2);
	for (let element in map2) {
		if (map1[element] !== map2[element]) return false;
	}

	return true;
}

function getHashMap(str) {
	const charMap = {};

	for (let element of str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')) {
		charMap[element] = charMap[element] + 1 || 1;
	}

	return charMap;
}
