const nums = [-7, -4, -1, 1, 3, 4, 8, 11];

const sortSquaredArray = (nums) => {
	let left = 0;
	let right = nums.length - 1;

	const array = new Array(nums.length).fill(0);

	for (let i = nums.length - 1; i >= 0; i--) {
		let smallerNumber = Math.abs(nums[left]);
		let largerNumber = Math.abs(nums[right]);

		if (smallerNumber > largerNumber) {
			array[i] = Math.pow(smallerNumber, 2);
			left++;
		} else {
			array[i] = Math.pow(largerNumber, 2);
			right--;
		}
	}

	return array;
};

sortSquaredArray(nums);
