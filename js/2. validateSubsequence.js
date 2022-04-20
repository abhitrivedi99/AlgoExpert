const nums = [3, 6, 1, -1, 0, 19, 22, 11, 7]
const subNums = [6, 1, 0, 11]

// Time Complexity = O(N)
// Space Complexity = O(N)

const validateSubsequence = (nums, sub) => {
	let count = 0
	const temp = []
	for (let i = 0; i < sub.length; i++) {
		while (count <= nums.length) {
			if (nums[count] === sub[i]) {
				temp.push(nums[count])
				break
			}
			count++
		}
	}
	return temp.length === sub.length
}

// Time Complexity = O(N)
// Space Complexity = O(1)

const validateSubsequence2 = (nums, sub) => {
	let numsIndex = 0
	let subIndex = 0

	while (numsIndex < nums.length && subIndex < sub.length) {
		if (nums[numsIndex] === sub[subIndex]) subIndex++
		numsIndex++
	}
	return subIndex === sub.length
}

// Time Complexity = O(N)
// Space Complexity = O(1)

const validateSubsequence3 = (nums, subNums) => {
	let subIndex = 0

	for (value of nums) {
		if (subIndex === subNums.length) break
		if (value === subNums[subIndex]) subIndex++
	}
	return subIndex === subNums.length
}

validateSubsequence(nums, subNums)
validateSubsequence2(nums, subNums)
validateSubsequence3(nums, subNums)
