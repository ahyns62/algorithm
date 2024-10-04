function solution(n) {
    let ans = Array.from({length: n }, () => Array(n).fill(0));
    for(let i = 0; i < n; i++){
        ans[i][i] = 1;
    }
    return ans;
}