// 누적 최대값 -> DP
function solution(land) { 
    let dp = Array.from({length: land.length}, () => Array(4).fill(0));
    
    for(let i = 0; i < 4; i++){
        dp[0][i] = land[0][i];
    }
    
    for(let i = 1; i < land.length; i++){
        for(let j = 0; j < 4; j++){
            for(let k = 0; k < 4; k++){
                if(j !== k){
                    dp[i][j] = Math.max(dp[i][j], dp[i-1][k] + land[i][j]);
                }
            }
        }
    }

    return Math.max(...dp[land.length-1]);
}