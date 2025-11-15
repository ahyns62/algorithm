// 최적의 최단 경로 개수 -> DP
function solution(m, n, puddles) {
    let dp = Array.from({length: n}, () => Array(m).fill(0));
    
    for(let [x, y] of puddles){
        dp[y-1][x-1] = -1;
    }
    
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            dp[0][0] = 1;
            
            if(dp[i][j] === -1){
                dp[i][j] = 0;
                continue;
            }
            
            let fromTop = (i > 0 && dp[i-1][j] !== -1) ? dp[i-1][j] : 0;
            let fromLeft = (j > 0 && dp[i][j-1] !== -1) ? dp[i][j-1] : 0;
            
            dp[i][j] = (fromTop + fromLeft) % 1000000007;
            
        }
    }
    
    return dp[n-1][m-1];
}