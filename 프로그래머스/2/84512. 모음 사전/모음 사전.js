function solution(word) {
    // 모든 단어 조합 탐색 -> 정렬 -> 인덱스 찾기
    const words = ['A', 'E', 'I', 'O', 'U'];
    let arr = [];
    let num = 0;
    
    function dfs(curr){
        if(curr.length > 5) return;
        
        if(curr.length > 0) arr.push(curr);
        
        for(let w of words){
            dfs(curr + w);
        }
    }
    
    dfs("");
    
    arr.sort();
    
    return arr.indexOf(word) + 1;
}