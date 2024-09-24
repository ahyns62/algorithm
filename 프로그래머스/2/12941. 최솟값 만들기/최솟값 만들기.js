function solution(A,B){
    // 가장 작은 수(A) * 가장 큰 수(B)
    A.sort((a, b) => a - b); // 오름차순 1 2 4
    B.sort((a, b) => b - a); // 내림차순 5 5 4
    return A.reduce((sum, curr, i) => sum + curr * B[i], 0);
}