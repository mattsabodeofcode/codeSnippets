// This is a function to rotate all elements in an array to the right by
// storing the end element in an array, 
// inserting it at the start 
// and deleting it at the end.

function solution(A, K) {
    for (var i = 0; i < K; i++)
    {    
        let end = A[A.length-1];
        A.unshift(end);
        A.pop();
    } return A
} 
solution([1,2,3,4,5,6,7,8,9], 4);
