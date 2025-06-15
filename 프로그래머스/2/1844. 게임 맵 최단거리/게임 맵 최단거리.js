function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    
    const dx = [0, 0, -1, 1];
    const dy = [1, -1, 0, 0];
    
    const queue = [];
    queue.push([0, 0]);
    
    while(queue.length > 0){
        const [x, y] = queue.shift(); // 지금 위치(x: 열, y: 행)
        
        for(let i = 0; i < 4; i++){
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            if(nx < 0 || ny < 0 || nx >= m || ny >= n) continue;
            
            if(maps[ny][nx] !== 1){
                continue;
            }
            
            maps[ny][nx] = maps[y][x] + 1;
            queue.push([nx, ny]);
            
        }
    }
    
    const ans = maps[n -1][m - 1];
    
    return ans === 1 ? -1 : ans;
}