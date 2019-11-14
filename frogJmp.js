// This code is designed to calculate the minimal number of jumps a frog would need to reach its destination Y starting at position X with a jump distance of D.

function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    return Math.ceil((Y-X)/D);
};

