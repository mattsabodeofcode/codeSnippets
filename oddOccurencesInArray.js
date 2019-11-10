// This code finds the only number from an array that does not have an equal match.
// It sorts the array from low to high, and then looks to see which which neighbouring number does not match. i+=2 allows the for loop to go two numbers ahead if i == i+1. if i is not == to i+1 the loops returns the current number.

function solution(A) {
  A.sort(); 
    
  for (var i = 0; i < A.length; i+=2) {
    if ((A[i] !== A[i+1])) 
    return A[i];  
  } 
}

solution([5, 9, 5, 2, 6, 9, 8, 6, 2, 9, 9]);

// Output 8
