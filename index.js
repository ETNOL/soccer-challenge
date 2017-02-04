const fs = require('fs');
const RankCalculator = require('./src/RankCalculator');
const InputParser = require('./src/InputParser');
const OutputWriter = require('./src/OutputWriter');

const filePath = process.argv[2];
if (!filePath) { noFilePathError() }
const input = fs.readFileSync(filePath, {encoding: 'utf8'});
const matches = InputParser(input);
const ranks = new RankCalculator(matches).results;

OutputWriter(ranks);
process.exit(0);


function noFilePathError () {
    console.error('ERR! No file path given.'); 
    process.exit(1); 
}