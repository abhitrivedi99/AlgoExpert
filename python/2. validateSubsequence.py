nums = [3, 6, 1, -1, 0, 19, 22, 11, 7]
subNums = [6, 1, 0, 11]

# Time complexity = O(N)
# Space complexity = O(1)


def validateSubsequence(nums, sub):
    numsIndex, subIndex = 0

    while numsIndex < len(nums) and subIndex < len(sub):
        if nums[numsIndex] == sub[subIndex]:
            subIndex += 1
        numsIndex += 1

    return subIndex == len(sub)


validateSubsequence(nums, subNums)
