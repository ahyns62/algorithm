function solution(k, dungeons) {
    // 순열 이용한 완전 탐색 (DFS+백트래킹)
    let maxCount = 0; 
    let visited = new Array(dungeons.length).fill(false);
    
    
    function dfs(curr, count){
        maxCount = Math.max(maxCount, count);
        
        for(let i = 0; i < dungeons.length; i++){
            const [need, cost] = dungeons[i];
            
            if(!visited[i] && curr >= need){
                visited[i] = true;
                
                dfs(curr - cost, count + 1);
                
                visited[i] = false;
            }
        }
    }
    
    dfs(k, 0);
    
    return maxCount;
}