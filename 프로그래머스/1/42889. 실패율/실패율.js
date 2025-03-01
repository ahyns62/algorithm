function solution(N, stages) {
    let total = stages.length; 
    
    // 스테이지별 도전자 수
    const challenger = new Array(N + 2).fill(0);
    for(const stage of stages){
        challenger[stage] += 1;
    }
    
    // 스테이지별 실패한 사용자 수
    const fails = {};
    
    // 실패율 계산
    for(let i = 1; i <= N; i++){
        if(challenger[i] === 0){
            fails[i] = 0;
            continue;
        }
        
        fails[i] = challenger[i] / total;
        total -= challenger[i];
    }
    
    const result = Object.entries(fails).sort((a, b) => b[1] - a[1]); // 값 추출(실패율)
    
    return result.map((v) => Number(v[0])); // 스테이지 번호 추출
}