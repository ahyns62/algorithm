function solution(x, n) {
    var answer = [];
    let add = x;
    for(let i = 0; i < n; i++){
        answer.push(x);
        x += add;
    }
    return answer;
}
