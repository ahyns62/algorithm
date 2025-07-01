function solution(begin, target, words) {
    let queue = [];
    let visited = new Set();
    
    if(!words.includes(target)) return 0;
    
    queue.push({word: begin, steps: 0});
    
    while(queue.length > 0){
        const { word, steps } = queue.shift();
        
        if(word === target){
            return steps;
        }
        
        for(let next of words){
            if(!visited.has(next) && canConvert(word, next)){
                visited.add(next);
                queue.push({word: next, steps: steps + 1});
            }
        }
    }
    
    return 0;
}

function canConvert(word1, word2){
    let diff = 0;
    for(let i = 0; i < word1.length; i++){
        if(word1[i] !== word2[i]) diff++;
        
        if(diff > 1) return false;
    }
    
    return diff === 1;
}
