
function solution(triangle) {
    const n = triangle.length;
    let dp = Array.from({length: n}, () => Array(n).fill(0));
    dp[0][0] = triangle[0][0];
    
    for(let i = 1; i < n; i++){
        for(let j = 0; j <= i; j++){
            let fromLeft = (j > 0) ? dp[i-1][j-1] : 0;
            let fromRight = (j < i) ? dp[i-1][j] : 0;
            
            dp[i][j] = Math.max(fromLeft, fromRight) + triangle[i][j];
        }
    }
    
    return Math.max(...dp[n-1]);
}