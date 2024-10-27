function solution(myStr) {
    const answer = [...myStr].map(e => e === "a" || e === "b" || e === "c" ? ' ' : e).join('').split(' ').filter(e => e);
    
    return answer.length > 0 ? answer : ["EMPTY"];
}