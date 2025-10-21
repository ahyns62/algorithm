function solution(n, computers) {
    let answer = 0;
    let visited = Array(n).fill(false);
    
    for(let i = 0; i < n; i++){
        if(!visited[i]){
            dfs(i);
            answer++;
        }
    };
    
    function dfs(node){
        visited[node] = true;
        const computer = computers[node];
        
        for(let i = 0; i < computer.length; i++){
            const isConnect = computer[i] === 1 ? true : false;
            
            if(isConnect && !visited[i]){
                dfs(i);
            }
        }
    };
    

    return answer;
}