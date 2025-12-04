function solution(distance, rocks, n) {
    let left = 1;
    let right = distance;
    let answer = 0;
    
    rocks.sort((a, b) => a - b);
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let removeCount = 0;
        let prev = 0;
        
        for (let rock of rocks) {
            if (rock - prev < mid) {
                removeCount++;
            } else {
                prev = rock;
            }
        }
        
        if (distance - prev < mid) {
            removeCount++;
        }
        
        if (removeCount <= n) {
            answer = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return answer;
}
