function solution(n) {
    let answer = [];
    
    function hanoi(num, from, other, to){
        if(num === 0){
            return;
        } else{
            hanoi(num-1, from, to, other);
            answer.push([from, to]);
            hanoi(num-1, other, from, to);
        }
    }
    
    hanoi(n, 1, 2, 3);
    
    return answer;
}