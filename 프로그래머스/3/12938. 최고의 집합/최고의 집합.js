function solution(n, s) {
    // 시간복잡도: O(n)
    
    let base = Math.floor(s / n);
    let remainder = s % n;
    let answer = new Array(n).fill(base);
    
    if(s < n){
        return [-1];
    }
    
    for(let i = n - remainder; i < n; i++){
        answer[i] += 1;
    }
    
    return answer;
}