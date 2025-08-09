function solution(maps) {
    // 최단 경로 -> BFS
    const x = maps[0].length; // 행
    const y = maps.length; // 열
    const dx = [0, 0, -1, 1]; 
    const dy = [1, -1, 0, 0];
    const visited = Array.from({length: y}, () => Array(x).fill(false));
    
    // 초기 실패 조건
    if(maps[0][0] === 0 || maps[y - 1][x - 1] === 0){
        return -1;
    }
    
    // BFS
    // 큐 삽입(y, x, 이동 칸 수) -> 방문 처리 -> 범위 체크, 벽 or 방문했으면 스킵
    function bfs(yy, xx){
        const queue = [];
        queue.push([yy, xx, 1]);
        visited[yy][xx] = true;
        
        while(queue.length){
            const [cy, cx, dist] = queue.shift();
            
            if(cy === y - 1 && cx === x - 1){
                return dist;
            }
            
            for(let dir = 0; dir < 4; dir++){
                const ny = cy + dy[dir];
                const nx = cx + dx[dir];
                
                // 범위 체크
                if (ny < 0 || ny >= y || nx < 0 || nx >= x) continue;
                if (maps[ny][nx] === 0 || visited[ny][nx]) continue;
                
                visited[ny][nx] = true;
                
                queue.push([ny, nx, dist + 1]);
            }
        }
        return -1;
    }
    
    
    return bfs(0, 0);
}