function solution(elements) {
    const ans = new Set();
    const len = elements.length;
    
    for(let size = 1; size <= len; size++){
        for(let start = 0; start < len; start++){
            let sum = 0;
            
            for(let k = 0; k < size; k++){
                sum += elements[(start + k) % len];
            }
            
            ans.add(sum);
        }
    }
    
    return ans.size;
}