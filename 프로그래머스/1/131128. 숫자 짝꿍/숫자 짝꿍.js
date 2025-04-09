function solution(X, Y) {
    let answer = '';
    const countX = new Array(10).fill(0);
    const countY = new Array(10).fill(0);
    
    for(let ch of X) countX[+ch]++;
    for(let ch of Y) countY[+ch]++;
    
    for(let i = 9; i >= 0; i--){
        const minCount = Math.min(countX[i], countY[i]);
        answer += i.toString().repeat(minCount);
    }
    
    if(answer === '') return "-1";
    if(answer[0] === '0') return "0";
    
    
    return answer;
}