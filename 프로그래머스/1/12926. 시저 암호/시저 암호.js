function solution(s, n) {
    let answer = '';
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    
    for(let i = 0; i < s.length; i++){
        // 공백일 때
        if(s[i] === " "){ 
            answer += " ";
            continue;
        }
        // 공백이 아닐 때
        let textArr = upper.includes(s[i]) ? upper : lower;
        let idx = textArr.indexOf(s[i]) + n;
        if(idx >= textArr.length) idx -= textArr.length;
        answer += textArr[idx];
    };
    return answer;
}