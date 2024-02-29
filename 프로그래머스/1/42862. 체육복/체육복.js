function solution(n, lost, reserve) {
    // 여벌 없이 분실한 학생 수
    let realLost = lost.sort((a, b) => a - b).filter(x => !reserve.includes(x));
    // 분실 없이 여벌 있는 학생 수
    let realReserve = reserve.sort((a, b) => a - b).filter(x => !lost.includes(x));
    let answer = n - realLost.length;
    
    for(let i = 0; i < realLost.length; i++){
        let lostNum = realLost[i];
        for(let j = 0; j < realReserve.length; j++){
            let reserveNum = realReserve[j];
            if(reserveNum === lostNum - 1 || reserveNum === lostNum + 1){
                answer++;
                realReserve[j] = -1;
                break;
            }
        }
    }
    return answer;
}