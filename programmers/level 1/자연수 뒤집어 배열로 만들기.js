function solution(n) {
    var answer = [];
    let a = n.toString().split('');
    for(let i = a.length - 1; i >= 0; i--){
        answer.push(Number(a[i]));
    }
    return answer;
}
