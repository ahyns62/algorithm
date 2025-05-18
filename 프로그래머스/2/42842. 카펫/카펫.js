function solution(brown, yellow) {
    // 완전탐색(Brute-force)
    // 전체 넓이 = brown + yellow
    // 전체 넓이의 모든 약수 쌍 (w, h) 중 w >= h인 것만 확인
    // 각 (w, h)에 대해 (w - 2) * (h - 2) == yellow 가 되는지 확인 -> 만족 시 [w, h] 반환

    const sum = brown + yellow;
    
    for (let height = 3; height <= Math.sqrt(sum); height++){
     
        if(sum % height === 0){
            const width = sum / height; 
            
            if(width >= height && (width - 2) * (height - 2) === yellow){
                return [width, height];
            }
        }
    }
}