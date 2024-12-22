// 최소공배수 = 두 수를 곱한 값을 최소공약수 나누기
function solution(arr) {
    return arr.reduce((a, b) => (a * b) / gcd(a, b));
}

function gcd(a, b) {
    return a % b ? gcd(b, a % b) : b;
}