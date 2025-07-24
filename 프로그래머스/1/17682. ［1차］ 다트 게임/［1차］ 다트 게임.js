function solution(dartResult) {
    const regex = /(\d{1,2})([SDT])([*#]?)/g;
    const scores = [];
    let match;
    
    // 점수 | 보너스 | [옵션]
    // S: 1제곱 D: 2제곱 T: 3제곱
    // *: 지금 점수 & 이전 점수 2배
    // # : 지금 점수 * -1
    while((match = regex.exec(dartResult)) !== null){
        let [_, num, bonus, option] = match;
        num = Number(num);
        
        if(bonus === 'D'){
            num = Math.pow(num, 2);
        } else if(bonus === 'T'){
            num = Math.pow(num, 3);
        }
        
        if(option === '*'){
            num *= 2;
            if(scores.length > 0) scores[scores.length - 1] *= 2;
        } else if(option === '#'){
            num *= -1;
        }
        
        scores.push(num);
    }
 
    
    return scores.reduce((a, b) => a + b, 0);
}

