function solution(answers) {
    const highScores = [];
    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    ];
    const scores = [0, 0, 0];
    
    // 각 수포자의 패턴과 정답 일치 확인
    for(const [i, answer] of answers.entries()){
        for(const [j, pattern] of patterns.entries()){
            if (answer === pattern[i % pattern.length]){
                scores[j] += 1;
            }
        }
    }
    
    const maxScore = Math.max(...scores);
    
    for(let i = 0; i < scores.length; i++){
        if(scores[i] === maxScore){
            highScores.push(i + 1);
        }
    }
    
    return highScores;
}