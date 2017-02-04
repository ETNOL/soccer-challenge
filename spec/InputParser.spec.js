const InputParser = require('../src/InputParser');
const fs = require('fs');

const mockString = `
    Falcons 3, Snakes 0
    Diamonds 2, Red Pandas 3
    Gophers 2, Tigers 2
    Lions 1, Bears 2
    Falcons 2, Bears 4
    Red Pandas 1, Snakes 3
    Diamonds 3, Gophers 3
    Tigers 3, Lions 2`;

const mockReturn = [ 
    { name: 'Falcons', score: '3' },
    { name: 'Snakes     Diamonds', score: '02' },
    { name: 'Red Pandas     Gophers', score: '32' },
    { name: 'Tigers     Lions', score: '21' },
    { name: 'Bears     Falcons', score: '22' },
    { name: 'Bears     Red Pandas', score: '41' },
    { name: 'Snakes     Diamonds', score: '33' },
    { name: 'Gophers     Tigers', score: '33' },
    { name: 'Lions', score: '2' } 
];

describe('Input Parser', () => {

    it('should be defined', () => {
        expect(InputParser).toBeDefined();
    });

    it('should return a matches object',  () => {
        const matches = InputParser(mockString);
        expect(matches).toEqual(mockReturn);
    });
})