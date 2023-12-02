function solution(t, p) {
    let a = [];
    let answer = 0;

    for(let i = 0; i < t.length - p.length + 1; i++){
        a.push(t.slice(i, i + p.length));
    };
    for(let j = 0; j < a.length; j++){
        if(a[j] <= p){
            answer++;
        }
    };
    
    return answer;
}