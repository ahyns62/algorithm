function solution(n, results) {
    let answer = 0; 
    const wins = Array.from({length: n + 1}, () => []);
    const loses = Array.from({length: n + 1}, () => []);
    
    for (const [winner, loser] of results){
        wins[winner].push(loser);
        loses[loser].push(winner);
    }
    
    // DFS로 간접 승패 관계 탐색
    const dfs = (graph, start, visited) => {
        for(const next of graph[start]){
            if(!visited[next]){
                visited[next] = true;
                
                dfs(graph, next, visited);
            }
        }
    };
    
    // 순위 확정
    for(let i = 1; i <= n; i++){
        const winVisited = Array(n+1).fill(false);
        const loseVisited = Array(n+1).fill(false);
        
        winVisited[i] = true;
        loseVisited[i] = true;
        
        dfs(wins, i, winVisited);
        dfs(loses, i, loseVisited);
        
        const total = winVisited.filter(Boolean).length + loseVisited.filter(Boolean).length - 2;
        
        if(total === n - 1) answer++;
    }
    
    
    return answer;
}