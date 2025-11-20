function solution(n, left, right) {
    // 인덱스 매핑(1차원 index → 2차원 (row, col) 변환)
    let answer = [];
    const startRow = Math.floor(left / n);
    const endRow = Math.floor(right / n);
    
    for(let r = startRow; r <= endRow; r++){
        const startCol = (r === startRow) ? left % n : 0;
        const endCol = (r === endRow) ? right % n : n - 1;
        
        for(let c = startCol; c <= endCol; c++){
            answer.push(Math.max(r, c) + 1);
        }
        
    }
    
    return answer;
}