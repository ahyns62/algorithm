function solution(emergency) {
    let k = emergency.slice().sort((a, b) => b - a);
    return emergency.map(x => k.indexOf(x) + 1);
}