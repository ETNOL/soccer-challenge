## Code Challenge
*Due to a growth in corruption when it comes to scorekeeping, you've been tasked with building a tool for your local soccer league to help keep track of scores for the upcoming tournament. Scores are kept track in a text file where each line represents a tournament match. The scores of the match are stored with the name of the team followed by the score. The tournament uses a point scoring system to determine the overall winner of the tournament:*

### What we look for
We look for clean, well-architected code that would be easy for a maintainer to understand. We expect you to approach this as you would a production ready application.

### Input/output
Your solution should parse a file via stdin(pipe or redirect), or by loading a file by name passed via the command line. The output of the given input should be passed via stdout.
 
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

  Your program should take a file input of raw match scores via file name or stdin and output via stdout the teams in order of ranking in the format of 
  ```
     <Rank>. <Team Name> <Tournament Points>
  ```

 ### Guidelines/recommendations

 * An example from last year's tournament scores and the final rankings can be found in the examples folder of the project
 * You may use whichever language you are most comfortable with
 * Please include instructions for using your program from installation to execution. It can be assumed a standard environment is already set up (i.e. node + npm/ruby installed).
 * Your code should be production ready and resilient
 * We write tests. You should too.
