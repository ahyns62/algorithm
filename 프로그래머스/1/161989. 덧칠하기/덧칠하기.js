function solution(n, m, section) {
    let count = 0;
    
    while(section.length) {
        let current = section.shift();
        
        while(section[0] < current + m){
            section.shift();
        }
        count++;
    }
    
    return count;
}