function solution(emergency) {
    let ans = [...emergency].sort((a, b) => b - a);
    return emergency.map((v) => ans.indexOf(v) + 1);
}