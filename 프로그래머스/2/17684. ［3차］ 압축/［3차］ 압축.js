function solution(msg) {
    let answer = [];
    let w = '';
    let dictIndex = 27;
    
    // 1. 사전 초기화(A-Z, 1-26)
    const dict = new Map();
    for(let i = 0; i < 26; i++){
        dict.set(String.fromCharCode(65+i), i+1);
    }
    
    // 2. LZW 압축
    for(let i = 0; i < msg.length; i++){
        const c = msg[i];
        if(dict.has(w+c)){
            w = w + c;
        } else {
            if(w){
               answer.push(dict.get(w)); 
            }

            dict.set(w+c, dictIndex++);
            w = c;
        }
    }
    
    // 3. 마지막 문자열 처리
    if(w){
        answer.push(dict.get(w));
    }
    
    return answer;
}