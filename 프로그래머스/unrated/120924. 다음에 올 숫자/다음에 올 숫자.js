function solution(common) {
    let answer = 0;
    if(common[1] % common[0] === 0 && common[common.length - 1] % common[common.length - 2] === 0){
        answer = common[common.length - 1] * (common[1] / common[0]);
    } else{
        answer = common[common.length - 1] + (common[1] - common[0]);
    }
    
    return answer;
}