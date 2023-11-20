function solution(A, B) {
    let answer = 0;
    if(A === B){
        return 0;
    }
    let arr = A.split("");
    for(let i = arr.length - 1; i >= 0; i--){
        // 마지막 문자를 잘라서 tmp 저장
        let tmp = arr.splice(arr.length - 1, 1)[0];
        // tmp를 arr 맨 앞에 추가
        arr.unshift(tmp);
        answer++;
        
        if(arr.join("") === B) return answer;
    }
    return -1;
}