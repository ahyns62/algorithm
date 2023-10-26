function solution(n) {
    let answer = 0;
    for(let i = 2; i <= n; i++){
        let k = true; // 소수
        for(let j = 2; j < i; j++){
            if(i % j === 0){
                k = false;
            }
        }
        if(!k) ++answer;
    }
    return answer;
}