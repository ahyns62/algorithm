function solution(sides) {
    // 오름차순 정렬
    sides.sort((a, b) => a - b);
    // 비교
    return (sides[0] + sides[1] > sides[2] ? 1 : 2);
}