function solution(absolutes, signs) {
    var answer = 0;
    
    for(let j = 0; j <= signs.length - 1; j++){
        if(signs[j] === false){
            absolutes[j] = -1 * absolutes[j]; 
        }
        answer += absolutes[j];
    }
    return answer;
}
