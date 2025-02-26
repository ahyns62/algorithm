function solution(priorities, location){
    let cnt = 0; // 프로세스 실행 횟수
    let maxPriority = Math.max(...priorities); // 최대 우선 순위
    
    while(true){
        const currProcess = priorities.shift();
        
        if(currProcess === maxPriority){
            cnt++;
            if(location === 0) return cnt++;
            maxPriority = Math.max(...priorities); 
        } else {
            priorities.push(currProcess);
        }
        
        // 위치 조정
        location = location === 0 ? priorities.length - 1 : location - 1;
    }
}
