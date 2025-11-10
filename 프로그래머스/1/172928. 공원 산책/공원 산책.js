function solution(park, routes) {
    const H = park.length;
    const W = park[0].length;
    
    // 1) 시작점 찾기
    let startRow = 0, startCol = 0;
    for(let i = 0; i < H; i++){
        const idx = park[i].indexOf('S');
        if(idx !== -1){
            startRow = i;
            startCol = idx;
            break;
        }
    }
    
    // 현재 좌표 설정
    let currPosition = [startRow, startCol]; 
    
    // 2) 방향 매핑
    const DIR = {
        N: [-1, 0],
        S: [1, 0],
        W: [0, -1],
        E: [0, 1],
    };

    
    // 3) 명령 처리
    for(const route of routes){
        const [op, n] = route.split(" ");
        const dist = Number(n);
        const [dirRow, dirCol] = DIR[op];
        
        let [nextRow, nextCol] = currPosition;
        let isValid = true;
        
        for(let j = 0; j < dist; j++){
            nextRow += dirRow;
            nextCol += dirCol;
            
            if(nextRow < 0 || nextRow >= H || nextCol < 0 || nextCol >= W || park[nextRow][nextCol] === 'X'){
                isValid = false;
                break;
            }
        }
        
        if(isValid){
            currPosition = [nextRow, nextCol];
        }
        
    }
    
    return currPosition;
}