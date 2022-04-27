coins = [5, 7, 2, 1, 1, 3, 22]

# Time Complexity O(N * log(N))
# Space Complexity O(N)


def nonConstructibleChange(coins):
    change = 0

    coins.sort()

    for coin in coins:
        if(coin > change + 1):
            return change + 1

        change += coin


nonConstructibleChange(coins)
