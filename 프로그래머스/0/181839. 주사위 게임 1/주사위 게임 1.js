function solution(a, b) {
    let answer = 0;
    
    // 두 수가 모두 홀수인 경우
    if(a % 2 !== 0 && b % 2 !== 0){
        answer = Math.pow(a, 2) + Math.pow(b, 2);
    }
    // 두 수 중 하나만 홀수인 경우
    else if(a % 2 !== 0 || b % 2 !== 0){
        answer = 2 * (a + b);
    }
    // 두 수 모두 짝수인 경우
    else {
        answer = Math.abs(a - b);
    }
    
    return answer;
}