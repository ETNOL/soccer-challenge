// Builds a object for the RankCalculator to score  
// One glaring assumption this parser makes is all names
// will be alphabetic characters. Hopefully no one names their
// team L33t B3arZ.

module.exports = function (input) {
    return input.split('\r\n')
        // remove blank arrays
        .filter((match) => { return match.length })
        // split by team 
        .map((match) => { return match.split(','); })
        // build team score objects
        .map((match) => {
            return match.map((teamAndScore) => {
                return {
                    name: parseAlpha(teamAndScore),
                    score: parseNumeric(teamAndScore) 
                }
            });
    });
}

function parseAlpha (str) {
    return str.replace(/[^a-z A-Z]/gi, '').trim();
}

function parseNumeric (str) {
    return str.replace(/[^0-9]/gi, '')
}
