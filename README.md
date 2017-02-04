## Rank Calculator 
A utility is designed to rank teams based on match history. 

### Dependencies 
* Node.js
 
### Scoring
 1. The winner of a match receives 3 tournament points while the loser receives 0.
 2. In the event of a match draw, both teams receive 1 Tournament point.
 3. Teams should be ordered first by rank and then by alphabetical order
     * If two teams are tied for second place, they will appear in alphabetical order with the same rank
 4. Teams tied for rank should offset the following rank
     * If two teams are tied for second place, the next ranking after second should be fourth.
    
  For example, given the following scores
  ```
  Falcons 3, Tornados 1
  Gophers 4, Falcons 1
  Knights 2, Gophers 1
  Tornados 1, Knights 1
  ```
  
 
 The final ranking would be
 ```
 1. Knights 4
 2. Falcons 3
 2. Gophers 3
 4. Tornados 1
 ```

 ### How to Use 
 From the command line:
 ```
 npm start {filePath}
 ```

 To run an example:

 ```
 npm start ./examples/2015-Matches.txt
 ``` 

### Input file format
Please see the ./examples/2015-Matches.txt file for reference.

Each game should be seperated by a line break.

Each team should be seperated by a comma.

```
{Team} {Score}, {Team} {Score}
```