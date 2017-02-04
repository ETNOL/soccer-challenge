module.exports = function (ranks) {
    var ranked = [];

    // Build a sorted array of our output values
    Object.keys(ranks).forEach((team) => {
        ranked.push([team, ranks[team]]);
    })

    ranked.sort(function(a, b) {
        return b[1] - a[1];
    });

    // And output to stdout
    ranked.forEach((teamRank, index) => {
        const rank = index + 1;
        const team = teamRank[0];
        const score = teamRank[1]; 

        process.stdout.write(
            `${rank}. ${team} ${score}\r\n`
        )
    })
}
