// 최단 경로 - 너비 우선 탐색 이용
// 조건: 레버 당김 여부
class Queue {
    items = []; 
    front = 0; // 앞
    rear = 0; // 뒤
    
    push(item){
        this.items.push(item);
        this.rear++; // rear에서 push
    }
    
    pop(){
        return this.items[this.front++]; // front에서 pop*
    }
    
    isEmpty(){
        return this.front === this.rear;
    }
}

// 이동 가능한 좌표 판단 여부 함수(이동 범위가 가로,세로 길이를 넘지 않는지 + 0보다 큰지 + 벽이 아닌지 확인)
function isValidMove(ny, nx, n, m, maps){
    return 0 <= ny && 0 <= nx && ny < n  && nx < m && maps[ny][nx] !== 'X';
}

// 큐 삽입 함수
// 방문하지 않는 경우, 방문 표시 & 큐 삽입
function appendToQueue(ny, nx, k, time, visited, q){
    if(!visited[ny][nx][k]){
        visited[ny][nx][k] = true;
        q.push([ny, nx, k, time + 1]); // 1초씩 시간 증가
    }
}

function solution(maps) {
    const q = new Queue();
    const n = maps.length; // 가로
    const m = maps[0].length; // 세로
    // 방문 여부 배열
    const visited = Array.from(Array(n), () => Array(m).fill(false).map(() => Array(2).fill(false)));
    // 좌표 이동 방향
    const dy = [-1, 1, 0, 0];
    const dx = [0, 0, -1, 1];
    // 도착점
    let endY = -1;
    let endX = -1;
    
    // 먼저 시작점, 도착점 찾기
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            // 시작 지점(S)인 경우, 방문 표시 & 큐 삽입
            if(maps[i][j] === 'S'){
                visited[i][j][0] = true;
                q.push([i, j, 0, 0]);
            }
            // 출구(E)인 경우, 도착 지점 저장(endY, endX)
            if(maps[i][j] === 'E'){
                endY = i; // y좌표
                endX = j; // x좌표
            }
        }
    }
    
    // 큐가 비어있지 않을 때까지 반복
    while (!q.isEmpty()){
        const [y, x, k, time] = q.pop(); // 큐에서 x, y좌표, 레버 여부, 시간 꺼내오기
        
        // 도착점 도달 + 레버 당겼을 경우, 걸리는 시간 반환
        if(y === endY && x === endX && k === 1){
            return time;
        }
        
        // 방향 이동
        for(let i = 0; i < 4; i++){
            // 현재 위치 + 오프셋
            const ny = y + dy[i]; 
            const nx = x + dx[i];
            
            // 이동 가능 시 큐에 삽입
            if(!isValidMove(ny, nx, n, m, maps)){
                continue;
            }
            
            // 다음 이동 지점이 레버(L)인 경우
            if(maps[ny][nx] === 'L'){
                appendToQueue(ny, nx, 1, time, visited, q);
            } // 레버가 아닌 경우
            else {
                appendToQueue(ny, nx, k, time, visited, q);
            }
        }
    }
    
    // 도착점 도달 못할 시
    return -1;
}