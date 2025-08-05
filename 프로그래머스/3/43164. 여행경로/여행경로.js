function solution(tickets) {
    let answer = [];
    let visited = Array(tickets.length).fill(false);
    
    tickets.sort();
    
    // 지금까지 경로 + 추가할 새 공항
    // DFS 탐색
    function dfs(cur, path){
        if (path.length === tickets.length + 1){
            answer = path;
            
            return true;
        }
        
        for(let i = 0; i < tickets.length; i++){
            const [from, to] = tickets[i];
            
            if(!visited[i] && from === cur){
                visited[i] = true;
                if (dfs(to, [...path, to])) return true;
                
                visited[i] = false;
            }
        }
        
        return false;
    }
    
    dfs("ICN", ["ICN"]);
    
    return answer;
}