function solution(array, n) {
    array.sort((a, b) => a - b); // 배열 정렬
    const arr = array.map((k) => Math.abs(k - n)); // 요소에서 n을 뺀 절댓값 배열
    const value = Math.min(...arr); // arr에서 가장 작은 요소
    const idx = arr.indexOf(value); // 가장 작은 요소의 인덱스
    return array[idx];
}