function solution(array) {
    array.sort((a, b) => a - b);
    let num = parseInt(array.length / 2);
    return array[num];
}