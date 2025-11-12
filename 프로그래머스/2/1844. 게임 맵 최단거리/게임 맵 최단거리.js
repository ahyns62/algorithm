function solution(maps) {
    // 방향 설정
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];
    const n = maps.length;
    const m = maps[0].length;
    
    // 방문 배열 설정
    let visited = Array.from({length: n}, () => Array(m).fill(false));
    
    // 시작점 설정
    const queue = [[0, 0, 1]];
    visited[0][0] = true;

    // 탐색 함수(최단 경로 -> BFS)
    while(queue.length){
        const [x, y, dist] = queue.shift();
        
        if(x === n - 1 && y === m - 1) return dist;
        
        for(let i = 0; i < 4; i++){
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            if(nx < 0 || ny < 0 || nx >= n || ny >= m || visited[nx][ny] || maps[nx][ny] === 0){
            continue;
            }
            
            // 방문 처리 및 이동
            visited[nx][ny] = true;
            queue.push([nx, ny, dist + 1]);
        }
    }

    return -1;

}