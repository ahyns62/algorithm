function solution(s, skip, index) {
    let ans = "";
    
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const validChars = [...alphabet].filter(char => !skip.includes(char)); 
    
    for(let char of s){
        // 현재 문자의 인덱스 찾은 후, index만큼 이동하여 추가
        let currIdx = validChars.indexOf(char);
        let newIdx = (currIdx + index) % validChars.length;
        
        ans += validChars[newIdx];
    }
    
    return ans;
}