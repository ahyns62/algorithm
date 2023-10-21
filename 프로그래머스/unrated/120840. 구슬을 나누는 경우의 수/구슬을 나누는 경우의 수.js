function solution(balls, share) {
    return factorial(balls) / (factorial(balls - share) * factorial(share));
}

function factorial(n){
    let answer = BigInt(1);
    for(let i = 2; i <= n; i++){
        answer *= BigInt(i);
    }
    return answer;
}