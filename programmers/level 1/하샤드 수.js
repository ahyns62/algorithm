function solution(x) {
    var answer = true;
    let sum = 0;
    let str = String(x);
    for(let i = 0; i <= str.length - 1; i++){
        sum += parseInt(str[i]);
    }
    if (x % sum !== 0){
        answer = false;
    }
    return answer;
}
