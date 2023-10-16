function solution(emergency) {
    let answer = [...emergency].sort((a, b) => b - a); // 내림차순된 새 배열 [76, 24, 3]
    return emergency.map((v) => answer.indexOf(v) + 1); // 인덱스 찾아서 map화
}