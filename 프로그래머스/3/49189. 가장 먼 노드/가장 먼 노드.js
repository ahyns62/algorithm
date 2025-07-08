function solution(n, edge) {
    // 인접 리스트 -> 각 노드 연결 정보 저장
    const graph = Array.from({length: n + 1}, () => []);
    
    // 각 노드까지의 최단 거리 저장
    const dist = Array(n + 1).fill(-1);
    dist[1] = 0;
    
    for(let [a, b] of edge){
        graph[a].push(b);
        graph[b].push(a);
    }
    
    // BFS
    const queue = [1];
    while(queue.length > 0){
        const curr = queue.shift();
        for(let next of graph[curr]){
            if(dist[next] === -1){
                dist[next] = dist[curr] + 1;
                queue.push(next);
            }
        }
    }
    
    const maxDist = Math.max(...dist);

    return dist.filter(d => d === maxDist).length;
}