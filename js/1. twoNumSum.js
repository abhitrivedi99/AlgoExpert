let curentTarget

const array = [3, 5, -4, 8, 11, -1, 1, 6]
const target = 10

// Time Complexity O(N)
// Space Complexity O(N)

const twoNumberSum = (array, target) => {
	const a = {}
	for (let i = 0; i < array.length; i++) {
		const currentElement = array[i]
		const desiredOutput = target - currentElement

		if (a[desiredOutput] !== undefined) {
			return [a[desiredOutput], i]
		}
		a[currentElement] = i
	}
	return []
}

// Time Complexity O(N * log(N))
// Space Complexity O(1)

const twoNumberSum2 = (nums, target) => {
	nums.sort((a, b) => a - b)

	let left = 0
	let right = nums.length - 1

	while (left < right) {
		possibleTarget = nums[left] + nums[right]
		if (target === possibleTarget) return [nums[left], nums[right]]
		if (target < possibleTarget) right -= 1
		if (target > possibleTarget) left += 1
	}

	return []
}

twoNumberSum(array, target)
twoNumberSum2(array, target)
