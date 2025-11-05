function solution(rectangle, characterX, characterY, itemX, itemY) {
    characterX *= 2;
    characterY *= 2;
    itemX *= 2;
    itemY *= 2;
    let newRec = rectangle.map(rec => rec.map(point => point * 2));
    
    // 방향 설정
    const moveX = [0, 0, 1, -1];
    const moveY = [1, -1, 0, 0];
    
    const start = [characterX, characterY, 0];
    let queue = [start];
    
    // 이동 가능한 좌표 -> 2차원 배열 정의
    let range = Array.from({length: 102}, () => Array(102).fill(0));
    newRec.forEach(([x1, y1, x2, y2]) => {
        for(let i = x1; i <= x2; i++){
            for(let j = y1; j <= y2; j++){
                if(i === x1 || i === x2 || j === y1 || j === y2){
                    if(range[i][j] === 0) range[i][j] = 1;
                } else{
                    range[i][j] = 2;
                }
            }
        }
    });
    
    // 시작 위치 0으로 변경
    range[characterX][characterY] = 0;
    
    // 큐 담긴 값이 없을 때까지 반복(=도착 지점 도달)
    while(queue.length > 0){
        let [x, y, cnt] = queue.shift();
        if(x === itemX && y === itemY) return cnt/2;
        
        for(let i = 0; i < 4; i++){
            let chX = x + moveX[i];
            let chY = y + moveY[i];
            if(range[chX][chY] === 1){
                queue.push([chX, chY, cnt+1]);
                range[chX][chY] = 0;
            }
        }
    }
    
    return 0;
    
}