function solution(num) {
    let answer = num;
    let cnt = 0;
    
    while(answer !== 1){
        if(answer % 2 === 0){
            answer = (answer / 2);
            cnt++;
        } 
        else if(answer === 1){
            cnt = 0;
        } 
        else {
            answer = (answer * 3 + 1);
            cnt++;
        }
    }
    
    if(cnt > 500){
        cnt = -1;
    }
    
    return cnt;
}