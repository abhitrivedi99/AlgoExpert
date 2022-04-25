const teams = [
	['html', 'c#'],
	['c#', 'python'],
	['python', 'html'],
];

const results = [0, 0, 1];

// Time Complexity O(N)
// Time Complexity O(K)

function winnerTeam(teams, results) {
	const WINNER_TEAM = 1;

	let bestTeam = '';

	let score = { '': 0 };

	for (let [index, team] of teams.entries()) {
		const result = results[index];

		const [homeTeam, awayTeam] = team;

		let winnerTeam = result === WINNER_TEAM ? homeTeam : awayTeam;

		if (score[winnerTeam] !== undefined) {
			score[winnerTeam] = score[winnerTeam] + 3;
		} else {
			score[winnerTeam] = 3;
		}

		if (score[winnerTeam] > score[bestTeam]) bestTeam = winnerTeam;
	}

	return bestTeam;
}

winnerTeam(teams, results);
