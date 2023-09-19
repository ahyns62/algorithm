function solution(n, k) {
    let answer = 0;
    let num = Math.floor(n / 10);
    return 12000 * n + 2000 * (k - num);
}