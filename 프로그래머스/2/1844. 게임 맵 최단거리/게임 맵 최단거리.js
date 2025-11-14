// 칸의 최솟값 -> BFS
function solution(maps) {
    // 방향 생성
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];
    const n = maps.length; // 5
    const m = maps[0].length; // 5
    
    // 방문 배열 생성
    let visited = Array.from({length: n}, () => Array(m).fill(false));
    
    // 시작점 큐에 넣고 방문처리
    const queue = [[0, 0, 1]];
    visited[0][0] = true;
    
    // 큐가 빌 때까지 인접한 노드 넣고 방문 처리
    while(queue.length > 0){
        // 첫 요소 꺼내서 확인
        const [x, y, dist] = queue.shift();
        
        // 1) 목표 도달 했을 경우
        if(x === n - 1 && y === m - 1) return dist;
        
        // 2) 도달 안했을 경우
        for(let i = 0; i < 4; i++){
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            // 예외 조건 처리
            if(nx < 0 || ny < 0 || nx >= n || ny >= m || maps[nx][ny] === 0 || visited[nx][ny]){
                continue;
            }
            
            // 방문 처리
            queue.push([nx, ny, dist + 1]);
            visited[nx][ny] = true;
        }
    }

    
    return -1;
}