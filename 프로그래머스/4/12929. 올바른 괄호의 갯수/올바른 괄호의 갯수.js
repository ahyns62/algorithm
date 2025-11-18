function solution(n) {
    const dp = Array(n+1).fill(0);
    
    dp[0] = 1;
    dp[1] = 1;
    
    // 카탈란 수 점화식
    // dp[i] = i개 괄호쌍의 조합 개수
    for(let i = 2; i <= n; i++){
        for(let j = 0; j < i; j++){
            dp[i] += dp[j] * dp[i-1-j];
        }
    }
    
    return dp[n];
}