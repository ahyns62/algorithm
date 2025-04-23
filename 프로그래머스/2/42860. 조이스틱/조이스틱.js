function solution(name) {
    let answer = 0;
    let minCursorMoveCnt = name.length - 1;
    
    for(let i = 0; i < name.length; i++){
        answer += Math.min(name.charAt(i).charCodeAt() - 65, 91 - name.charAt(i).charCodeAt());
        let lastAIndex = i + 1;
        
        while(lastAIndex < name.length && name.charAt(lastAIndex)==='A'){
            lastAIndex++;
        }
        minCursorMoveCnt = Math.min(minCursorMoveCnt, i * 2 + name.length - lastAIndex, i + (name.length - lastAIndex) * 2);
        
    }
    
    return answer + minCursorMoveCnt;
}