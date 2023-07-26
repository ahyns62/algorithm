function solution(s) {
    let answer = s.split(" ");
    let arr = answer.map((el) => Number(el));
    return `${Math.min(...arr)} ${Math.max(...arr)}`;
}