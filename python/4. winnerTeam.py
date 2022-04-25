teams = [
        ['html', 'c#'],
        ['c#', 'python'],
        ['python', 'html'],
]

results = [0, 0, 1]

# Time Complexity O(N)
# Time Complexity O(K)


def winnerTeam(teams, results):
    bestTeam = ""
    score = {bestTeam: 0}
    WINNER_TEAM = 1

    for idx, team in enumerate(teams):
        result = results[idx]

        homeTeam, awayTeam = team

        wonTeam = homeTeam if result == WINNER_TEAM else awayTeam

        if wonTeam in score.keys():
            score[wonTeam] += 3
        else:
            score[wonTeam] = 3

        if(score[wonTeam] > score[bestTeam]):
            bestTeam = wonTeam

    return bestTeam


winnerTeam(teams, results)
