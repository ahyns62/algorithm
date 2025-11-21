function solution(n, wires) {
    let answer = n;

    for(let i = 0; i < wires.length; i++){
        // 각 노드에 연결된 노드 목록 담은 1차원 배열(-> 인접리스트)
        const graph = Array.from({length: n+1}, () => []);
        let cnt = 0;
        let visited = Array(n + 1).fill(false);
        
        for(let j = 0; j < wires.length; j++){
            // 같으면 간선 끊기
            if(i === j) continue;
            
            const [from, to] = wires[j];
            graph[from].push(to);
            graph[to].push(from);
        }
        
        // DFS
        function dfs(node){
            visited[node] = true;
            cnt++;
            
            for(const next of graph[node]){
                if(!visited[next]){
                    dfs(next);
                }
            }
        }
        
        dfs(1);
        
        const diff = Math.abs(cnt - (n - cnt));
        answer = Math.min(answer, diff);    
    }
    
    return answer;
}