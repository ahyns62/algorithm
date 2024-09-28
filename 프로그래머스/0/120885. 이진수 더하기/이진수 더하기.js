function solution(bin1, bin2) {
    let ans = '';
    // 2진수 -> 10진수
    let b1 = parseInt(bin1, 2);
    let b2 = parseInt(bin2, 2);
    // 더해서 10진수 -> 2진수
    ans += (b1 + b2).toString(2);
    return ans;
}