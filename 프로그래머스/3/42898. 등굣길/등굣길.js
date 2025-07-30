function solution(m, n, puddles) {
    const MOD = 1_000_000_007;
    // dp[y][x] = (1,1)에서 (x,y)까지의 경로 수
    let dp = Array.from({length: n + 1}, () => Array(m + 1).fill(0));
    let isPuddles = Array.from({length: n + 1}, () => Array(m + 1).fill(false));
    
    // 물 웅덩이 표시
    for(const [x, y] of puddles){
        isPuddles[y][x] = true;
    }
    
    // dp 테이블
    dp[1][1] = 1;
    
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= m; j++){
            if(j === 1 && i === 1) continue;
            
            if(isPuddles[i][j]){
                dp[i][j] = 0;
            } else {
                dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % MOD;
            }
        }
    }
    
    
    return dp[n][m];
}