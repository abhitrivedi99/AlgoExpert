array = [3, 4, 5, 6, 7, 1]
target = 11

# Time Complexity O(N)
# Space Complexity O(N)


def twoNumberSum(nums, target):
    dict = {}
    for num in enumerate(nums):
        sum = target - num
        if sum in dict:
            return [sum, nums[num]]
        else:
            dict[num] = True
    return []


# Time Complexity O(N * log(N))
# Space Complexity O(1)

def twoNumberSum2(nums, target):
    nums.sort()
    left = 0
    right = len(nums) - 1

    while left < right:
        sum = nums[left] + nums[right]
        if sum == target:
            return [nums[left], nums[right]]
        elif sum < target:
            left += 1
        elif sum > target:
            right -= 1

    return []


twoNumberSum(array, target)
twoNumberSum2(array, target)
