nums = [-7, -4, -1, 1, 3, 4, 8, 11]

# Time Complexity O(N)
# Space Complexity O(N)


def sortSquaredArray(nums):
    left = 0
    right = len(nums) - 1
    result = [0] * len(nums)
    for index in reversed(range(len(nums))):
        if abs(nums[left]) > abs(nums[right]):
            result[index] = pow(nums[left], 2)
            left += 1
        else:
            result[index] = pow(nums[right], 2)
            right -= 1
        index -= 1
    return result


sortSquaredArray(nums)
