/* ------------------------------------
There is a robot starting at position(0, 0),
the origin, on a 2 D plane.Given a sequence
of its moves, judge if this robot ends up 
at(0, 0) after it completes its moves.

The move sequence is represented by a string,
and the character moves[i] represents its
ith move.Valid moves are R(right), L(left),
U(up), and D(down).If the robot returns to
the origin after it finishes all of its moves,
return true.Otherwise, return false.

from leetcode.com
------------------------------------ */

var judgeCircle = function (moves) {
    // create hashmap to keep track of the robot's
    // moves up/down
    var position = {
        'x': 0,
        'y': 0
    }
    for (var i = 0; i < moves.length; i++) {
        if (moves[i] == "U") {
            position['x'] += 1;
        } else if (moves[i] == "D") {
            position['x'] -= 1;
        } else if (moves[i] == "L") {
            position['y'] -= 1;
        } else {
            position['y'] += 1;
        }
    }
    if (position['y'] !== 0 || position['x'] !== 0) {
        return false
    }
    return true;
};