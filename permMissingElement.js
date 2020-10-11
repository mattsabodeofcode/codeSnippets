// function to find the missing element of a given permutation using 

function solution(A) {
    const n = A.length;
    let calc = ((n+1)*(n+2))/2;
    for(const i in A) {
        calc -= A[i];
    }
    return calc;
}
