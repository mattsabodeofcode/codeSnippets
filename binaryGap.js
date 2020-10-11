// Find the binary gap of a given number.
// This solution takes an input N, converts it to base 2 (binary) using the .toString method.
// It the loops through each character of the binnary string, and tracks the maximum number of zeros between two '1's i.e. the binary gap.

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    const binDigit = N.toString(2);
    let cur = 0;
    let result = 0;
    for(i = 0; i < binDigit.length; i++) {
        if(binDigit[i] === '1') { 
            if(cur > result) { result = cur; }
            cur = 0;
        }
        else { cur++; }
    }
    return result;
}
