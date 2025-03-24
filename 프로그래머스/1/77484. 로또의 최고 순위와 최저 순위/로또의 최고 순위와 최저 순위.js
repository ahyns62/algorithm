function solution(lottos, win_nums) {
    let answer = [];
    let zeroCount = 0;
    let matchCount = 0;
    
    for(let num of lottos){
        if(num === 0){
            zeroCount++;
        }
        
        if(win_nums.includes(num)){
            matchCount++;
        }
    }
    
    const maxScore = zeroCount === 0 && matchCount === 0 ? 6 : 7 - (zeroCount + matchCount);
    const minScore = matchCount === 0 ? 6 : 7 - matchCount;
    answer.push(maxScore, minScore);
    
    
    return answer;
}