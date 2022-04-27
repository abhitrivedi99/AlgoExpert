coins = [5, 7, 2, 1, 1, 3, 22]

# Time Complexity O(N * log(N))
# Space Complexity O(1)


def nonConstructibleChange(coins):
    change = 0

    coins.sort()

    for coin in coins:
        if(coin > change + 1):
            return change + 1

        change += coin
    
    return change + 1


nonConstructibleChange(coins)
