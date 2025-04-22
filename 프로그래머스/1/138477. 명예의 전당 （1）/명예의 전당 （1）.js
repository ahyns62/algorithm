function solution(k, score) {
    let answer = [];
    let stack = [];
    
    for(let i = 0; i < score.length; i++){
        const num = score[i];
        
        if(stack.length < k){
            stack.push(num);
            answer.push(Math.min(...stack));
            continue;
        }
        
        if(Math.min(...stack) >= num){
            answer.push(Math.min(...stack));
            continue;
        }
        
        stack.sort((a, b) => b - a);
        stack.pop();
        stack.push(num);
        answer.push(Math.min(...stack));
    }
    
    return answer;
}