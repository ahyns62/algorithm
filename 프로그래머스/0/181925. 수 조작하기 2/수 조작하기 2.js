function solution(numLog) {
    const commandMap = {
        '1': 'w',
        '-1': 's',
        '10': 'd',
        '-10': 'a'
    }
    let answer = [];
    
    for(let i = 0; i < numLog.length; i++){
        answer.push(commandMap[numLog[i+1] - numLog[i]]);
    }
    
    return answer.join('');
}