function solution(order) {
    let answer = 0;
    let sublist = [];
    let currentNum = 1;
    
    for(let i = 0; i < order.length; i++){
        let targetNum = order[i];
        let loaded = false;
        
        // 1) 보조 컨테이너 맨 위에 target이 있는지 먼저 확인
        if(sublist.length > 0 && sublist[sublist.length - 1] === targetNum){
            sublist.pop();
            answer++;
            
            continue;
        }
        
        // 2) 보조 컨테이너에 없으면 메인 컨테이너 확인
        while(currentNum <= order.length && currentNum <= targetNum){
            if(currentNum === targetNum){
                answer++;
                currentNum++;
                loaded = true;
                break;
            }
            
            sublist.push(currentNum);
            currentNum++;
        }
        
        // 3) 실을 수 없는 경우 반복 종료
        if(!loaded && (sublist.length === 0 || sublist[sublist.length -1 ] !== targetNum)){
            break;
        }
    }
    
    
    return answer;
}