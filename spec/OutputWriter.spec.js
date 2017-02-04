const OutputWriter = require('../src/OutputWriter');

const mockInput = {
    'Knights': 4,
    'Falcons': 3,
    'Gophers': 3,
    'Tornados': 1
};

describe('OutputWriter', () => {

    it('should be defined', () => {
        expect(OutputWriter).toBeDefined();
    });

    it('should write a string for each ranked team to stdout', () => {
        const catchArray = [];
        process.stdout.write = function (str) {
           catchArray.push(str); 
        } 
        OutputWriter(mockInput);
        expect(catchArray.length).toEqual(Object.keys(mockInput).length);
    });

    it('should sort the teams by rank', () => {
        const catchArray = [];
        process.stdout.write = function (str) {
           catchArray.push(str); 
        } 
        OutputWriter(mockInput);
        for(let i = 0; i < (catchArray.length); i++) {
            const rank = catchArray[i][0];
            const expectedRank = (i + 1).toString();
            expect(rank).toEqual(expectedRank);
        }

    });

})