function solution(s) {
    let answer = '';
    for(let i = 0; i < s.length; i++){
        answer += s[i];
    }
    let arr = [...answer];
    
    return arr.sort().reverse().join("");
}
