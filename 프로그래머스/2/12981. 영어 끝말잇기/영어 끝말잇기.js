function solution(n, words) {
    let ans = {};
    for(let i = 0; i < words.length; i++){
        let num = (i % n) + 1; // 몇 번째 사람
        let turn = Math.floor(i / n) + 1; // 몇 번째 차례
        // 탈락하는 경우
        // 1. 이미 단어가 존재할 경우
        // 2. 앞 사람 단어의 끝 글자 != 현재 단어의 첫글자
        if(ans[words[i]] || (i > 0 && words[i - 1].slice(-1) !== words[i][0])){
            return [num, turn];
        }
        ans[words[i]] = true; // 말한 단어 기록
    }
    return [0, 0];
}