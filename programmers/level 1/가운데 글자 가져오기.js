function solution(s) {
    const strLength = s.length;
    const start = Math.round(s.length / 2) - 1;
    
    if(strLength % 2 == 0){ return s.slice(start, start + 2) }
    else{ return s.slice(start, start + 1) }

    return answer;
}
