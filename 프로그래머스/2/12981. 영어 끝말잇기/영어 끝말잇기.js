function solution(n, words) {
    let ans = {};
    for (let i = 0; i < words.length; i++) {
        let num = (i % n) + 1;  // 몇 번째 사람
        let turn = Math.floor(i / n) + 1; // 몇 번째 차례
        // 탈락 조건
        if(ans[words[i]] || (i > 0 && words[i - 1].slice(-1) !== words[i][0])){
            return [num, turn];
        } 
        ans[words[i]] = true; // 말한 단어 기록
    }
    return [0, 0];
}