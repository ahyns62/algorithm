function solution(a, b) {
    const first = String(a) + String(b);
    const second = String(b) + String(a);
    return first > second ? Number(first) : Number(second);
}