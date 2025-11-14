// 최소 탐색 단계 구하기 -> BFS
function solution(begin, target, words) {
    // 방문 객체 생성
    let visited = Array(words.length).fill(false);
    
    // 큐에 시작점 삽입 및 방문 처리
    let queue = [{word: begin, cnt: 0}];
    
    while(queue.length > 0){
        const {word, cnt} = queue.shift();
        
        if(word === target){
            return cnt;
        }
        
        // 함수 조건 충족 시 탐색 & 방문 객체, 큐에 push
        for(let i = 0; i < words.length; i++){
            if(canConvert(word, words[i]) && !visited[i]){
                visited[i] = true;
                queue.push({word: words[i], cnt: cnt+1});
            }
        }
    }
    
    // 단어 변환 가능한 지 확인하는 함수
    function canConvert(word1, word2){
        let diffCount = 0;
        for(let i = 0; i < word1.length; i++){
            if(word1[i] !== word2[i]){
                diffCount++;
            }

            if(diffCount > 1) return false;
        }

        return diffCount === 1;
    }
    
    return 0;   
}