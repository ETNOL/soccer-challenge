const RankCalculator = require('../src/RankCalculator');

describe('Rank Calculator', () => {
    let gameResults;
    let correctRanks;
    let rankCalculator;

    beforeEach(()=> {
        gameResults = [[
            [
                {
                    'name': 'Falcons',
                    'score': 3
                },
                {
                    'name': 'Tornados',
                    'score': 1
                }
            ],
            [
                {
                    'name': 'Gophers',
                    'score': 4
                },
                {
                    'name': 'Falcons',
                    'score': 1
                }
            ],
            [
                {
                    'name': 'Knights',
                    'score': 2
                },
                {
                    'name': 'Gophers',
                    'score': 1
                }
            ],
            [
                {
                    'name': 'Tornados',
                    'score': 1
                },
                {
                    'name': 'Knights',
                    'score': 1
                }
            ]
        ]];

       correctRanks = {
           'Knights': 4,
           'Falcons': 3,
           'Gophers': 3,
           'Tornados': 1
       };

       rankCalculator = new RankCalculator(gameResults);
    });

    it('should be defined', () => {
        expect(RankCalculator).toBeDefined();
    });

    it('should return an instance', () => {
        expect(rankCalculator).toBeInstanceOf(RankCalculator);
    });

    it('should return a ranking object through a calc method', () => {
       expect(Object.keys(rankCalculator.results)).toEqual(expect.arrayContaining(['Falcons', 'Tornados', 'Gophers', 'Knights']));
    });

    it('should produce the correct ranks', () => {
        expect(rankCalculator.results).toEqual(correctRanks);
    });

    it.skip('should return an error message if recieving the incorrect input format', () => {
        // I'm not sure how Jest can test this since it exits the process which terminates the test suite.
       const gameResults = [
           {
               'Falcons': 3
           },
           {
               'Gophers': 4,
               'Falcons': 1
           }
       ];
       expect(() => { new RankCalculator(gameResults).results});
    });
});