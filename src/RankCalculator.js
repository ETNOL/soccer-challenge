const ScoringMap = require('./ScoringMap');

class RankCalculator {

    constructor (gameResults) {
        this.gameResults = gameResults;
        this.rankResults = {};
    } 

    get results () {
        this._calc();
        return this.rankResults;
    }

    _calc() { 
        this.gameResults.forEach((game) => {
            if (game.length != 2) { invalidGameFormatError(game); }

            const teamOne = game[0].name;
            const teamTwo = game[1].name;
            const teamOneScore = game[0].score;
            const teamTwoScore = game[1].score;

            if(teamOneScore === teamTwoScore) { return this._scoreTie(game); }

            teamOneScore > teamTwoScore ?
                this._scoreWinner(teamOne) : 
                this._scoreWinner(teamTwo);
        });
    }

    _scoreWinner(teamName) {
        this.rankResults[teamName] === undefined ?
            this.rankResults[teamName] = ScoringMap.win:
            this.rankResults[teamName] += ScoringMap.win;
    }

    _scoreTie(game) {
        game.forEach((team) => {
        const teamName = team.name;
        this.rankResults[teamName] === undefined ?
            this.rankResults[teamName] = ScoringMap.tie:
            this.rankResults[teamName] += ScoringMap.tie;
        })
    }
}

module.exports = RankCalculator;

function invalidGameFormatError(game) {
    console.error('ERR! Games require two teams but found only one team.', game); 
    process.exit(0); 
}