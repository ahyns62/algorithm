function solution(n) {
    let answer = 0;
    for(let i = 1; i <= n; i++){
        let sum = i;
        let j = i + 1;
        
        while(sum < n){
            sum += j;
            j++;
        }
        
        if(sum === n){
            answer++;
        }
    }
    return answer;
}