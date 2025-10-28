function solution(s) {
    let answer = [];
    let tuples = s.slice(2, -2).split(/},{/g).sort((a, b) => a.length - b.length);
    
    tuples.forEach(e => {
        let tuple = e.split(',');
        answer.push(tuple.find(el => !answer.includes(el)));
    });
    
    return answer.map(ans => Number(ans));
}